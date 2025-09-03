// Auto close <details> logic
document.querySelectorAll('details').forEach((d) => {
  d.addEventListener('toggle', () => {
    if (d.open) {
      document.querySelectorAll('details').forEach((other) => {
        if (other !== d) other.open = false;
      });
    }
  });
});
