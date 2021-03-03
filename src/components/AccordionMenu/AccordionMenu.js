import React, { useState } from "react";

const questionsAnswer = [
  {
    question: "What is Bookmark?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    question: "How can I request a new browser?",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    question: "What about other Chromium browsers?",
    answer:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

function AccordionMenu() {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderedQuestionsAnswer = questionsAnswer.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const iconTransform = index === activeIndex ? "rotate" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <div className="faq-accordion-container" key={index}>
        <div className="faq-question">
          <dt>
            <button
              aria-expanded={ariaExpanded}
              aria-controls={`faq-${index + 1}-description`}
              data-qa="faq-question-button"
              onClick={() => {
                setActiveIndex(index);
              }}
              className={`faq-question-button ${iconTransform}`}
            >
              {item.question}
            </button>
          </dt>
          <dd>
            <p
              id={`faq-${index + 1}-description`}
              data-ga="faq-description"
              className={`faq-description ${showDescription}`}
            >
              {item.answer}
            </p>
          </dd>
        </div>
      </div>
    );
  });

  return <dl>{renderedQuestionsAnswer}</dl>;
}

export default AccordionMenu;
