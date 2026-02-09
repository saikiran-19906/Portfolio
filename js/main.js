$(document).ready(function () {

  const projects = {

    mcd: {
      title: "McDonalds",
      description: "Motion-led campaign visuals created for McDonalds.",
      video: "https://player.vimeo.com/video/846694235?h=135c7d1745",
      variations: [
		   {
          type: "grid-mixed-phone",
          items: [
            { type: "video",
          src: "https://player.vimeo.com/video/864138397?h=31c5068d43"},
			   
		  ]
        },

		  {
          type: "grid-mixed-phone",
          items: [
			   { type: "video",
          src: "https://player.vimeo.com/video/1163061662?h=31e7f5d1c1"},
		
			  
          ]
        },
		  
	  ]
    },

    costa: {
      title: "Costa",
      description: "Costa App relaunch visuals and motion assets.",
      video: "https://player.vimeo.com/video/907045316?h=5c4702a7a2",
      variations: [
        {
          type: "grid-3",
          items: [
			  
            { type: "image",
				src: "https://drive.google.com/thumbnail?id=1R8T__L-Ii8xUgr3uOf-Ch7KkJAdv5HWR&sz=w1600"},
			{ type: "image",
				src: "https://drive.google.com/thumbnail?id=1bPlExd2YqFdL60U2R5UNk7hKEPCeIreN&sz=w1600"},
			{ type: "image",
				src: "https://drive.google.com/thumbnail?id=1fQcsjjO-p88HWoQ1BGii0NGKw36IlJoO&sz=w1600"}
         
            
          ]
        },
        {
          type: "grid-3",
          items: [
			  
			{ type: "image",
				src: "https://drive.google.com/thumbnail?id=1r48o_NmsLR4UjasUzkm5RNmzbNv3De0T&sz=w1600"},
			{ type: "image",
				src: "https://drive.google.com/thumbnail?id=1zbUP8shjWoEwNNNmC52fpgGrqWfWFl-G&sz=w1600"},
            { type: "image",
				src: "https://drive.google.com/thumbnail?id=1E_Ais90CXN8yo4xADAqtvUH47Q9B1Be2&sz=w1600"}
            
          ]
        },
		  
		{
          type: "grid-3",
          items: [
			  
			{ type: "image",
				src: "https://drive.google.com/thumbnail?id=1JGKMcDXA95tboUXU0QlRWs0Pz8voc0tC&sz=w1600"},            
            { type: "image",
				src: "https://drive.google.com/thumbnail?id=1tau6NkCg9PXZCSoGKWrfNiz6T6JRgRPg&sz=w1600" },
			{ type: "image",
				src: "https://drive.google.com/thumbnail?id=1TGPNcoqsQ0blOl4EZdtQam-qv6xgI5ii&sz=w1600"}
            
          ]
        }
      ]
    },

    talabat: {
      title: "Talabat",
      description: "Placeholder project.",
      video: null,
      variations: [
		  
		   {
          type: "grid-2",
          items: [
            { type: "video2",
          src: "https://player.vimeo.com/video/808445120?h=5c689a09f4",ratio: "r-9-16"},
			{ type: "video2",
          src: "https://player.vimeo.com/video/808445186?h=5a19d51b94",ratio: "r-9-16"}, 
			  { type: "video2",
          src: "https://player.vimeo.com/video/808444936?h=cb07f400fc",ratio: "r-9-16"},
			  { type: "video2",
          src: "https://player.vimeo.com/video/808445066?h=5f511c5344",ratio: "r-9-16"}, 
			  { type: "video2",
          src: "https://player.vimeo.com/video/808445015?h=4c69537552",ratio: "r-1-1"},
		  ]
        },
		  
		  
	  ]
    },

    rockit: {
      title: "Rockit",
      description: "Placeholder project.",
       video: "https://player.vimeo.com/video/721873142?h=e1ae903710",
      variations: [
		    {
          type: "grid-2",
          items: [
            { type: "video3",
          src: "https://player.vimeo.com/video/719961178?h=080300825c",ratio: "r-1-1"},
			{ type: "video3",
          src: "https://player.vimeo.com/video/719961260?h=9d8b2a8c5f",ratio: "r-1-1"}, 
			  { type: "video3",
          src: "https://player.vimeo.com/video/719961231?h=3b33f14c6b",ratio: "r-1-1"},
			  { type: "video3",
          src: "https://player.vimeo.com/video/719961285?h=f8494ff242",ratio: "r-1-1"}, 
			  { type: "video3",
          src: "https://player.vimeo.com/video/719961396?h=35bab66122",ratio: "r-1-1"},
			  { type: "video3",
          src: "https://player.vimeo.com/video/719961147?h=c45dfc12ca",ratio: "r-1-1"},
		  ]
        },
		  
		  
	  ]
    }
  };

  $(".project-card").on("click", function () {
    const project = projects[$(this).data("project")];
    if (!project) return;

    let html = "";

    if (project.video) {
      html += `
        <div class="media-video">
          <iframe src="${project.video}" allowfullscreen></iframe>
        </div>
      `;
    }

  project.variations.forEach(variation => {

  html += `
    <div class="media-variation">
      <div class="media-grid ${variation.type}">
  `;

  variation.items.forEach(item => {

    /* VIDEO IN GRID */
    if (item.type === "video") {
      html += `
        <div class="grid-video">
          <iframe
            src="${item.src}"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      `;
    }
    /* VIDEO IN GRID-vertical */

	   if (item.type === "video2") {
      html += `
        <div class="grid-video2">
          <iframe
            src="${item.src}"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      `;
    }
	  
	  /* VIDEO IN GRID-Square */

	   if (item.type === "video3") {
      html += `
        <div class="grid-video3">
          <iframe
            src="${item.src}"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
      `;
    }

    /* IMAGE IN GRID */
    if (item.type === "image") {
      html += `
        <img
          src="${item.src}"
          class="${item.ratio || ""}"
        />
      `;
    }

  });

  html += `</div></div>`;
});

    $("#media").html(html);
    $("#description").html(`
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    `);
  });

});
