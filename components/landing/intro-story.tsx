import { ContentImage } from "@/components/content-image";
import { SplitSection } from "@/components/split-section";
import { pageImages } from "@/lib/page-images";

export function IntroStory() {
  return (
    <section className="border-b border-border bg-surface-muted">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Start here
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
            Your coursework is the foundation. Your internship is the launch.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted sm:text-base">
            Whether you are in your third year, final semester, or a recent
            graduate — an internship at BitnBolt puts you on real IoT and
            embedded engineering programs. You work alongside teams who design
            custom hardware, write firmware, and connect devices to the cloud for
            industrial clients.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            We currently offer{" "}
            <strong className="font-medium text-foreground">
              internships only
            </strong>
            . Explore the tracks below, find the fit for your skills, and apply
            when you are ready.
          </p>
        </div>
      </div>
    </section>
  );
}
