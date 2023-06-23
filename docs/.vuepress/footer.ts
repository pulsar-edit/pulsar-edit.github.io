const orgRepo = "http://github.com/pulsar-edit";
const orgForum = "https://github.com/orgs/pulsar-edit/discussions";
const orgChat = "https://discord.gg/7aEbB9dGRT";
const orgReddit = "https://www.reddit.com/r/pulsaredit/";
const orgMastodon = "https://fosstodon.org/@pulsaredit";
const orgPrivacy = "https://pulsar-edit.dev/docs/resources/privacy";
const orgConduct = "https://pulsar-edit.dev/docs/resources/conduct";
const orgContact = "https://pulsar-edit.dev/community.html";
const packageRepo = "https://web.pulsar-edit.dev/";
const donateLink = "https://opencollective.com/pulsar-edit";

export const footer = `<!--<div><object type="image/svg+xml" data="/logo-name-footer.svg" ></object></div>TODO: Fix - I have simply run out of talent to make this work correctly with external CSS or modifying the internal values. At I can get this to do what I want when the SVG is inline-->

    <!--The below inline SVG is the same code (with unnecessary inkscape values removed) as is in .vuepress/public/logo-name-footer.svg but inline so I can actually manipulate it with the index.css file-->

    <div><svg xmlns="http://www.w3.org/2000/svg" id="logo-footer" width="570.4" height="191.7" viewBox="0 0 150.918 50.721"><path d="M68.578 84.622a6.143 6.143 0 0 0-6.138 6.138 6.143 6.143 0 0 0 6.138 6.138 6.143 6.143 0 0 0 6.138-6.138 6.143 6.143 0 0 0-6.138-6.138zM61.037 99.2c.212.08.424.133.635.133.424 0 .82-.16 1.138-.477a1.629 1.629 0 0 0 0-2.302 1.642 1.642 0 0 0-1.164-.476c-.423 0-.847.159-1.164.476-.477.477-.609 1.191-.344 1.773l-3.281 1.27-13.653 16.246.291.29 16.246-13.652zM58.55 105.656a39.749 39.749 0 0 0 4.419 3.28c.555-.21 1.773-.687 2.302-1.004-1.879-1.085-3.387-2.197-5.107-3.652zM77.389 79.065l-1.27 3.281a1.805 1.805 0 0 0-.609-.132c-.423 0-.82.159-1.138.476a1.629 1.629 0 0 0 0 2.302c.318.318.741.476 1.165.476.423 0 .846-.158 1.164-.476.476-.476.608-1.19.344-1.773l3.28-1.27 13.653-16.245-.291-.291z" class="st0 class1" style="stroke-width:.264583" transform="translate(-43.204 -65.413)"/><path d="M75.298 79.912a12.697 12.697 0 0 0-6.72-1.931c-7.038 0-12.78 5.741-12.78 12.78 0 2.46.715 4.762 1.932 6.72l.688-.265a3.435 3.435 0 0 1 .926-1.852c.106-.106.212-.185.344-.291a9.844 9.844 0 0 1-1.005-4.313c0-5.45 4.445-9.895 9.895-9.895 1.561 0 3.016.37 4.313 1.005.08-.106.158-.238.264-.344a3.263 3.263 0 0 1 1.852-.926zM68.578 100.655a9.758 9.758 0 0 1-4.313-1.005c-.08.106-.158.238-.264.344a3.263 3.263 0 0 1-1.852.926l-.265.688a12.697 12.697 0 0 0 6.72 1.931c7.038 0 12.78-5.741 12.78-12.779 0-2.46-.715-4.762-1.932-6.72l-.688.264a3.435 3.435 0 0 1-.926 1.852c-.105.106-.211.186-.344.291A9.844 9.844 0 0 1 78.5 90.76c-.027 5.477-4.472 9.895-9.922 9.895z" class="st0 class1" style="stroke-width:.264583" transform="translate(-43.204 -65.413)"/><path d="M47.49 90.787c-2.645 6.508-2.777 12.911.027 17.383l1.402-1.667c-1.905-3.466-1.905-8.15-.238-13.097a38.132 38.132 0 0 0 5.027 7.408l1.35-1.587c-2.25-2.673-4.048-5.53-5.345-8.44 1.694-3.81 4.313-7.647 7.779-11.113 3.387-3.387 7.197-6.032 11.086-7.779 2.858 1.27 5.741 3.043 8.467 5.345l1.587-1.35a38.97 38.97 0 0 0-7.435-5c.847-.291 1.667-.53 2.487-.715 4.18-.952 7.832-.608 10.637.927l1.667-1.403c-3.308-2.116-7.753-2.672-12.753-1.534a26.748 26.748 0 0 0-4.683 1.508c-7.568-3.096-14.976-2.752-19.394 1.667-3.414 3.413-4.551 8.678-3.175 14.79.344 1.56.873 3.122 1.508 4.657zm3.096-17.992c3.493-3.493 9.234-3.995 15.373-1.932-3.493 1.8-6.906 4.287-9.949 7.356-3.095 3.095-5.556 6.509-7.329 9.948-.264-.82-.529-1.64-.714-2.487-1.19-5.424-.265-10.001 2.62-12.885zM82.125 82.32c2.275 2.725 4.074 5.609 5.344 8.44l-.026.08c-1.747 3.889-4.419 7.699-7.726 11.006-4.868 4.868-10.61 8.229-16.193 9.499-4.18.952-7.831.608-10.636-.926l-1.667 1.402c2.196 1.402 4.869 2.117 7.858 2.117 1.561 0 3.202-.186 4.895-.583 5.953-1.349 12.065-4.894 17.198-10.027 3.016-3.016 5.53-6.43 7.356-9.949 2.063 6.139 1.56 11.88-1.932 15.373-2.646 2.646-6.8 3.625-11.589 2.857-.9.556-1.799 1.059-2.725 1.508 2.037.53 3.995.82 5.82.82 4.023 0 7.489-1.27 9.95-3.73 6.402-6.403 4.26-19.13-4.552-29.475zM88.237 75.044c1.164 2.143 1.613 4.815 1.349 7.805a31.925 31.925 0 0 1 1.64 2.884c1.006-4.842.45-9.128-1.614-12.383zM113.028 84.093h-11.007v15.001h2.567v-5.212h.185l8.229-.026c.793 0 1.455-.291 2.01-.847.556-.556.847-1.217.847-1.984v-4.101a2.68 2.68 0 0 0-.847-1.985 2.68 2.68 0 0 0-1.984-.846zm.265 6.958c0 .159-.106.265-.265.265h-8.15c-.158 0-.264-.106-.264-.265v-4.1c0-.16.106-.266.265-.266h8.149c.159 0 .265.106.265.265zM129.062 96.29c0 .185-.133.264-.238.264h-8.176c-.159 0-.265-.105-.265-.264V84.093h-2.566V96.29c0 .794.265 1.455.82 2.01.556.556 1.217.82 2.011.82h8.176c.767 0 1.455-.29 1.984-.82.556-.555.847-1.216.847-2.01V84.093h-2.593z" class="st0 class1" style="stroke-width:.264583" transform="translate(-43.204 -65.413)"/><path d="M103.24 33.708v-2.593h-9.63V18.653h-2.593v15.055z" class="st0 class1"/><path d="M158.669 84.066h-8.176c-.794 0-1.455.291-2.01.82-.556.556-.821 1.217-.821 2.011v3.149c0 .793.265 1.455.82 2.01.556.556 1.217.82 2.011.82h8.176c.105 0 .238.08.238.265v3.149c0 .185-.133.264-.238.264h-8.176c-.159 0-.265-.105-.265-.264v-1.058h-2.566v1.058c0 .794.265 1.455.82 2.01.556.556 1.217.82 2.011.82h8.176c.767 0 1.455-.29 1.984-.82.556-.555.847-1.216.847-2.01V93.14c0-.793-.291-1.455-.847-2.01a2.697 2.697 0 0 0-1.984-.82h-8.176c-.159 0-.265-.107-.265-.265v-3.149c0-.159.106-.264.265-.264h8.176c.105 0 .238.079.238.264v1.058h2.593v-1.058c0-.794-.291-1.455-.847-2.01a2.758 2.758 0 0 0-1.984-.82zM175.046 84.066h-8.149c-.794 0-1.455.291-2.01.82-.556.556-.82 1.217-.82 2.011v12.197h2.566v-5.132h8.678v5.132h2.593V86.897c0-.794-.291-1.455-.847-2.01a2.865 2.865 0 0 0-2.01-.82zm.265 7.356h-8.678v-4.498c0-.16.105-.265.264-.265h8.15c.158 0 .264.106.264.265zM193.276 93.035c.556-.555.847-1.217.847-1.984v-4.1a2.68 2.68 0 0 0-.847-1.985 2.782 2.782 0 0 0-2.01-.847h-10.98v15.002h2.566v-5.239h3.968l.027.053 4.365 5.186h2.884v-.556l-3.915-4.656h1.058c.82-.027 1.482-.318 2.037-.874zm-10.16-1.72c-.159 0-.264-.105-.264-.264v-4.1c0-.16.105-.266.264-.266h8.15c.158 0 .264.106.264.265v4.101c0 .159-.106.265-.265.265z" class="st0 class1" style="stroke-width:.264583" transform="translate(-43.204 -65.413)"/></svg></div>

    <div class="socialsBar">
      <a href=${orgRepo}>
        <i class="fab fa-github"></i>
      </a>
      <a href=${orgForum}>
        <i class="fas fa-comments"></i>
      </a>
      <a href=${orgChat}>
        <i class="fab fa-discord"></i>
      </a>
      <a href=${orgReddit}>
        <i class="fab fa-reddit"></i>
      <a href=${orgMastodon}>
        <i class="fab fa-mastodon"></i>
      </a>
      <a href=${donateLink}>
        <i class="fas fa-hand-holding-dollar"></i>
      </a>
    </div>

    <hr>

    <div class="linksBox">
      <div class="linksBoxLeft">
        <p class="linksBoxHeader"> Pulsar </p>
        <div class="linksBoxContent">
          <ul>
            <li>
              <a href="/download.html"> Downloads </a>
            </li>
            <li>
              <a href="/docs/"> Documentation </a>
            </li>
            <li>
              <a href=${packageRepo}> Package Repository </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="linksBoxMid">
        <p class="linksBoxHeader"> Team </p>
        <div class="linksBoxContent">
          <ul>
            <li>
              <a href="/about.html"> About Us </a>
            </li>
            <li>
              <a href="/blog/"> Blog </a>
            </li>
            <li>
              <a href=${orgRepo}> Org Repositories </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="linksBoxRight">
        <p class="linksBoxHeader"> Resources </p>
        <div class="linksBoxContent">
          <ul>
            <li>
              <a href=${orgPrivacy}> Privacy Policy </a>
            </li>
            <li>
              <a href=${orgConduct}> Code of Conduct </a>
            </li>
            <li>
              <a href=${orgContact}> Contact Us </a>
            </li>
          </ul>
        </div>
      </div>

    </div>



  <hr>

  <div class="copyrightBar">
    <span> Pulsar-Edit © 2022-2023 </span>
  </div>`;
