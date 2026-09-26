// Thin client for the Celibery backend (haadingroup-cmd/celibery11).
// NEXT_PUBLIC_API_URL is the deployed backend's origin, e.g.
// https://celibery11.vercel.app -- set in Vercel project settings.
const API_URL = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "";

export class ApiError extends Error {
  status: number;
  productId?: string;

  constructor(status: number, message: string, productId?: string) {
    super(message);
    this.status = status;
    this.productId = productId;
  }
}

async function apiFetch<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API_URL) {
    throw new ApiError(0, "The store isn't connected to a backend yet. Please try again later.");
  }

  let res: Response;
  try {
    res = await fetch(`${API_URL}${path}`, {
      ...init,
      headers: { "Content-Type": "application/json", ...init?.headers },
    });
  } catch {
    throw new ApiError(0, "Couldn't reach the server. Check your connection and try again.");
  }

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    const message = typeof data?.error === "string" ? data.error : "Something went wrong. Please try again.";
    throw new ApiError(res.status, message, typeof data?.productId === "string" ? data.productId : undefined);
  }

  return data as T;
}

export type CreateOrderPayload = {
  customer: {
    fullName: string;
    phone: string;
    email: string;
    address: string;
    city: string;
    notes?: string;
  };
  items: { productId: string; qty: number }[];
};

export type CreateOrderResult = {
  ref: string;
  subtotal: number;
  shipping: number;
  total: number;
  status: string;
};

export function createOrder(payload: CreateOrderPayload) {
  return apiFetch<CreateOrderResult>("/api/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export function submitContact(payload: ContactPayload) {
  return apiFetch<{ id: string }>("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function subscribeNewsletter(email: string) {
  return apiFetch<{ subscribed: boolean }>("/api/newsletter", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
}
