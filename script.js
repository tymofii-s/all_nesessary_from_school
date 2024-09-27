const select = document.querySelector("select");

select.addEventListener('change', function() {
  const selectedOption = select.value;
  const elementToScrollTo = document.querySelector(selectedOption);
  elementToScrollTo.scrollIntoView({ behavior: 'smooth' });
});


if (screen.orientation === "portrait-primary" || screen.orientation === "portrait-secondary") {
    document.querySelector("details").open === false
}