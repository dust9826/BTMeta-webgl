function btIcon_toggle() {
  const x = document.getElementById("bt_icon");
  const y = document.getElementById("bt_canvas");
  console.log("응애");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.classList.add("bt_meta_wrapper_hidden");
    y.classList.remove("bt_meta_wrapper_show");
  } else {
    x.style.display = "none";
    y.classList.remove("bt_meta_wrapper_hidden");
    y.classList.add("bt_meta_wrapper_show");
  }
}

window.onload = function () {
  document.getElementById("bt_icon").addEventListener("click", btIcon_toggle);
  document
    .getElementById("bt_meta_close_btn")
    .addEventListener("click", btIcon_toggle);
};
