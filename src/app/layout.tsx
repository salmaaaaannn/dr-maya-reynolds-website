import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
  description:
    "Evidence-based therapy for adults navigating anxiety, panic, trauma, and burnout in Santa Monica, California and via secure telehealth across CA. Integrating CBT, EMDR, mindfulness, and somatic techniques.",
  keywords: [
    "Dr. Maya Reynolds",
    "Clinical Psychologist Santa Monica",
    "Therapy for adults Santa Monica",
    "Anxiety therapy Santa Monica CA",
    "EMDR trauma therapy California",
    "Burnout therapy for professionals",
    "California telehealth therapist",
  ],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica, CA",
    description:
      "A calm space for healing. Collaborative, evidence-based therapy for thoughtful, high-achieving adults navigating anxiety, trauma, and burnout.",
    url: "https://drmayareynolds.com",
    siteName: "Dr. Maya Reynolds, PsyD",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className="scroll-smooth">
      <body className="bg-[#FAF7F2] text-[#2F3A38] antialiased selection:bg-[#8BA888]/30 selection:text-[#2F3A38]">
        {children}
      </body>
    </html>
  );
}
