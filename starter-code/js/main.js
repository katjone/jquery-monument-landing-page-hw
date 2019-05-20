
$(document).ready(function() {
  const $form = $(".contact");
  $form.on("submit", handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    const kids = $(this).children();
    console.log(kids);
    kids.each((i, obj) => {
      if ($(obj).children("input").length > 0) {
        if (
          $(obj)
            .children("input")
            .val() === ""
        ) {
          $(obj)
            .children("p")
            .fadeIn();
          $(obj)
            .children("input")
            .addClass("error");
        }
      } else if ($(obj).children("textarea").length > 0) {
        if (
          $(obj)
            .children("textarea")
            .val() === ""
        ) {
          $(obj)
            .children("p")
            .fadeIn();
          $(obj)
            .children("textarea")
            .addClass("error");
        }
      }
    });
  }
});