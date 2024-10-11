export default function SafariFAQ({ faqList }) {
  return (
    <section className="py-12 px-6 md:px-20 bg-[#f0e9df] text-[#ce6510]">
      <h2 className="text-3xl font-bold mb-6 text-[#ce6510]">
        Frequently Asked Questions
      </h2>
      <ul className="space-y-4">
        {faqList.map((faq, index) => (
          <li key={index} className="bg-white p-4 rounded-lg shadow">
            <strong className="text-[#050403]">Q: {faq.question}</strong>
            <p className="text-[#5c564e] mt-2">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
