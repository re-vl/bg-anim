jQuery(document).ready(function () {
   let num, offset, duration;

   jQuery("#main .elementor-background-overlay").append(`
   <div class="area">
      <ul class="circles">
         <li><i class="fab fa-html5 fa-4x"></i></li>
         <li><i class="fas fa-code fa-4x"></i></li>
         <li><i class="fab fa-css3 fa-4x"></i></li>
         <li><i class="fab fa-js fa-4x"></i></li>
         <li><i class="fab fa-node-js fa-4x"></i></li>
         <li><i class="fab fa-wordpress fa-4x"></i></li>
         <li><i class="fab fa-github fa-4x"></i></li>
         <li><i class="fab fa-sass fa-4x"></i></li>
         <li><i class="fab fa-elementor fa-4x"></i></li>
         <li><i class="fas fa-code-branch fa-4x"></i></li>
      </ul>
   </div>
   `);

   console.log(jQuery().new());

   setInterval(function () {
      jQuery(".circles li").each(function () {
         offset = Math.floor(Math.random() * (95 - 5)) + 5;
         duration = Math.round(Math.random() * 20 + 10);
         jQuery(this).css({ left: `${offset}%`, "animation-duration": `${duration}s` });
      });
   }, 5000);
});
