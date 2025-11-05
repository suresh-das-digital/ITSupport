"use client";
import React, { useState, useRef, useEffect } from "react";

const faqs = [
    {
      label: "What types of data loss can ITSupport.net.in's services protect against?",
      desc: "Our services safeguard against a broad range of data loss scenarios. These include hardware failures such as hard drive crashes, human error like accidental file deletions or overwriting, cyber-attacks including ransomware and malware, software corruption, and even physical damage resulting from natural disasters. Our aim is to ensure your data remains resilient against nearly any threat."
    },
    {
      label: "How often should I back up my data, and do you automate this process?",
      desc: "The best backup frequency depends on how frequently your data changes and how crucial it is. We help you determine the optimal schedule, whether that's daily, hourly, or even continuous backups. Our solutions include fully automated backup systems that run regularly without any manual steps, ensuring your data remains consistently protected. We also continuously monitor your backups to ensure every one completes successfully."
    },
    {
      label: "What is the data recovery process like if I lose my data?",
      desc: "If you ever experience data loss, our focus is on rapid and reliable restoration. First, we assess the scale of the loss. Next, using your secure backups, our experts carefully restore your data to your systems. We always prioritize minimizing downtime and protecting your data's integrity, so you can return to normal operations as quickly as possible."
    },
    {
      label: "How secure is my data when backed up through ITSupport.net.in's services?",
      desc: "Data security is paramount to us. We use strong encryption protocols for your data, both when it's being transferred and when it's stored. We also implement strict access controls so only authorized people can access your backups. Whether you choose on-premise, cloud, or hybrid solutions, you can trust that your data's confidentiality and integrity are always protected."
    },
    {
      label: "What makes ITSupport.net.in's data backup and recovery services stand out?",
      desc: "Our extensive experience—serving over 10,000 customers worldwide—speaks to our reliability. We provide customized, scalable solutions tailored to your specific needs rather than generic fixes. Our team of certified technicians offers proactive monitoring and expert support around the clock, ensuring that help is always available when you need it. With ITSupport.net.in, you get more than a service; you gain a robust shield for your valuable data."
    }
  ]


type AccordionItemProps = {
    label: string;
    desc: string;
  open: boolean;
  toggle: () => void;
  index: number;
};

const AccordionItem: React.FC<AccordionItemProps> = React.memo(
  ({ label, desc, open, toggle, index }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [maxHeight, setMaxHeight] = useState<string | undefined>("0px");

    useEffect(() => {
      if (contentRef.current) {
        setMaxHeight(open ? `${contentRef.current.scrollHeight}px` : "0px");
      }
    }, [open]);

    return (
      <div className="bg-white rounded-xl shadow-xl mb-4 transition">
       <button
  type="button"
  aria-expanded={open}
  aria-controls={`accordion-content-${index}`}
  id={`accordion-header-${index}`}
  onClick={toggle}
  className="w-full flex justify-between items-center px-6 py-6 text-left font-semibold text-gray-900 focus:outline-none focus-visible:ring focus-visible:ring-blue-300 rounded"
>
  {label}
  <svg
    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7 7-7-7"
    />
  </svg>
</button>
        <div
          ref={contentRef}
          id={`accordion-content-${index}`}
          role="region"
          aria-labelledby={`accordion-header-${index}`}
          className="px-6 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
          style={{ maxHeight, opacity: open ? 1 : 0 }}
        >
          <div className="py-2 text-gray-500">{desc}</div>
        </div>
      </div>
    );
  }
);

AccordionItem.displayName = "AccordionItem";

export default function  FaqSection  ({faqs}:{faqs:any[]}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="w-full bg-white py-16"
      aria-labelledby="faq-section-title"
    >
      <div className="max-w-2xl lg:max-w-[55%] mx-auto px-4">
        <h2
          id="faq-section-title"
          className="text-4xl font-bold text-center mb-3 text-black"
        >
          Frequently Asked{" "}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Questions
          </span>
        </h2>
        <p className="text-center text-gray-500 mb-10 text-lg">
          Get answers to common questions about our services and process.
        </p>
        <div>
          {faqs.map((faq, idx) => (
            <AccordionItem
              key={idx}
              index={idx}
              label={faq.label}
              desc={faq.desc}
              open={openIndex === idx}
              toggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

