"use strict";
{
  function isCanvasBlank(canvas) {
    return !canvas
      .getContext("2d")
      .getImageData(0, 0, canvas.width, canvas.height)
      .data.some((channel) => channel !== 0);
  }

  const i = setInterval((_) => {
    const p5 = window.p5;
    if (p5) {
      let cols, rows;
      let w = document.documentElement.clientWidth;
      let h = document.documentElement.clientHeight;
      let scl = 15 * window.devicePixelRatio; //20
      let flying = 0;

      let iconDrawn = false;

      new p5(($this) => {
        ($this.setup = (_) => {
          $this.createCanvas(w, h);
          $this.frameRate(1);
          cols = w / scl;
          rows = h / scl;

          window.onresize = debounce($this.windowResized);
        }),
          ($this.draw = (_) => {
            const isMobile =
              Math.max(
                document.body.scrollWidth,
                document.documentElement.scrollWidth,
                document.body.offsetWidth,
                document.documentElement.offsetWidth,
                document.body.clientWidth,
                document.documentElement.clientWidth
              ) <= 800;

            if (window.hasFocus && (!isMobile || (!iconDrawn && isMobile))) {
              $this.background(0);
              $this.stroke(255);
              $this.noFill();
              flying += 0.005; //0.2
              let yoff = flying;
              for (let y = 0; y < rows; y++) {
                let xoff = 0.0;
                for (let x = 0; x < cols; x++) {
                  let c = $this.map($this.noise(xoff, yoff), 0, 1, -1, 1.5); // map(noise(xoff, yoff), 0, 1, -1, 4);
                  $this.fill(c * 14, c * 125, c * 194); //14,125,194

                  $this.noStroke();
                  xoff += 0.75;
                  $this.rect(x * scl, y * scl, scl, scl);
                }
                yoff += 1; //0.2
              }

              if (isCanvasBlank($this.canvas) || !iconDrawn) {
                let saveCanvas = document.createElement("canvas");
                saveCanvas.width = 140; // width of saved image
                saveCanvas.height = 140; // height of saved image
                let cropStartX = 0; // position to start cropping image
                let cropStartY = 0;
                var ctx = saveCanvas.getContext("2d");

                //ctx.rotate(90 * Math.PI / 180);
                // ctx.translate(0, -saveCanvas.width);

                ctx.drawImage(
                  $this.canvas,
                  cropStartX,
                  cropStartY,
                  26,
                  26,
                  0,
                  0,
                  saveCanvas.width,
                  saveCanvas.height
                );

                ctx.beginPath();
                ctx.fillStyle = "white";
                ctx.font = "bold 90pt Verdana";
                ctx.textAlign = "center";
                ctx.shadowOffs = 0;
                ctx.fillText("♡", 75, 120);
                ctx.globalCompositeOperation = "destination-in";
                ctx.arc(
                  saveCanvas.width / 2,
                  saveCanvas.height / 2,
                  saveCanvas.height / 2,
                  0,
                  Math.PI * 2
                );

                ctx.fill();
                var b64 = saveCanvas.toDataURL("image/png");
                document.querySelector("link#favicon").href = b64;

                if (Zircord.mode == "hybrid") {
                  fetch(Zircord.LOCAL_API + "/app/icon", {
                    method: "POST",
                    body: b64,
                  });
                }

                iconDrawn = true;
              }
            }
          }),
          ($this.windowResized = (_) => {
            w = document.documentElement.clientWidth;
            h = document.documentElement.clientHeight;
            $this.setup();
            $this.resizeCanvas($this.windowWidth, $this.windowHeight);
          });
        $this.setup();
      });

      clearInterval(i);
    }
  }, 399);
  function debounce(func) {
    var timer;
    return function (event) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, 999, event);
    };
  }
}
