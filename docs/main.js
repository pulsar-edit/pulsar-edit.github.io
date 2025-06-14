
function expandOrCollapseDownloadSection(id) {
  const btn = document.getElementById(id);
  const list = document.getElementById(id.replace("-btn", ""));
  console.log(`ID: ${id}`);
  if (list.dataset.status === "open") {
    btn.classList.remove("icon-chevron-up");
    btn.classList.add("icon-chevron-down");

    list.classList.add("hide");
    list.dataset.status = "closed";

  } else if (list.dataset.status === "closed") {
    btn.classList.remove("icon-chevron-down");
    btn.classList.add("icon-chevron-up");

    list.classList.remove("hide");
    list.dataset.status = "open";
  }
}
