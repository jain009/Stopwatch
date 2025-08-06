import { useState } from "react";

export function Accordion({ faqs = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-xl mx-auto ml-100">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b p-4">
          <button
            className="w-full bg-blue text-left text-lg font-semibold"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.question}
          </button>
          {openIndex === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}
