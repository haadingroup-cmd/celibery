import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { footerLinks, site } from "@/data/site";
import { InstagramIcon, XIcon, YoutubeIcon, TikTokIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-950 text-ink-200">
      <Container className="pb-10 pt-16 sm:pb-12 sm:pt-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <span className="font-display text-2xl font-bold text-white">{site.name}</span>
            <p className="max-w-xs text-sm leading-relaxed text-ink-400">{site.description}</p>
            <div className="mt-2 flex items-center gap-2">
              {[
                { icon: InstagramIcon, href: site.social.instagram, label: "Instagram" },
                { icon: XIcon, href: site.social.x, label: "X" },
                { icon: YoutubeIcon, href: site.social.youtube, label: "YouTube" },
                { icon: TikTokIcon, href: site.social.tiktok, label: "TikTok" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-ink-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold text-white">{heading}</h3>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-ink-400 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1 text-sm text-ink-400">
            <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <p>{site.address}</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-400">
            <Link href="/privacy" className="inline-flex items-center gap-1 transition-colors hover:text-white">
              Privacy Policy <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/terms" className="inline-flex items-center gap-1 transition-colors hover:text-white">
              Terms of Service <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
