

  // Handle form submission
  const form = document.querySelector('form');
  const submitButton = document.getElementById('sendButton');
  if (form && submitButton) {
    form.addEventListener('submit', function (e) {
      submitButton.innerHTML = 'Form Submitted!';
      submitButton.classList.add('bg-green-600');
      submitButton.disabled = true;
    });
  }

 
  // Accordion functionality for dropdown sections
  const toggleButtons = document.querySelectorAll('[data-toggle]');
  const sections = document.querySelectorAll('[data-section]');

  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sectionId = btn.getAttribute('data-toggle');
      const section = document.querySelector(`[data-section="${sectionId}"]`);
      const isCurrentlyVisible = section.classList.contains('block');

      sections.forEach(s => {
        s.classList.add('hidden');
        s.classList.remove('block');
      });

      if (!isCurrentlyVisible) {
        section.classList.remove('hidden');
        section.classList.add('block');
      }
    });
  });

  // See More toggle
  const seeMoreButton = document.getElementById('seeMoreButton');
  if (seeMoreButton) {
    seeMoreButton.addEventListener('click', () => {
      seeMoreButton.innerHTML = `
        <button class="mt-4 rounded-xl text-black bg-white font-bold text-md">See Less</button>
        <svg class='w-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 
          0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 
          12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/>
        </svg>
      `;
    });
  }
});

 document.querySelectorAll(".accordion-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = document.getElementById(btn.dataset.target);
      const icon = btn.querySelector("svg");
      panel.classList.toggle("hidden");
      icon.classList.toggle("rotate-180");
    });
  });

  