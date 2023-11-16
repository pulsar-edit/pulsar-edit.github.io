<script setup>
    import { ref, onMounted } from 'vue';
    
    const _canvas = ref(null);
    const _container = ref(null);

    onMounted(() => {
        const COUNT = 40;
        const SPEED = 0.1;
        const BG_COLOR = 'rgba(26, 5, 40, 0.6)';
    
        class Star {
            x;
            y;
            z;
            xPrev;
            yPrev;
        
            constructor(x = 0, y = 0, z = 0) {
                this.x = x;
                this.y = y;
                this.z = z;
                this.xPrev = x;
                this.yPrev = y;
            }
        
            update(width, height, speed) {
                this.xPrev = this.x;
                this.yPrev = this.y;
                this.z += speed * 0.0675;
                this.x += this.x * (speed * 0.0225) * this.z;
                this.y += this.y * (speed * 0.0225) * this.z;
                if (
                this.x > width / 2 ||
                this.x < -width / 2 ||
                this.y > height / 2 ||
                this.y < -height / 2
                ) {
                this.x = Math.random() * width - width / 2;
                this.y = Math.random() * height - height / 2;
                this.xPrev = this.x;
                this.yPrev = this.y;
                this.z = 0;
                }
            }
        
            draw(ctx) {
                ctx.lineWidth = this.z;
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.xPrev, this.yPrev);
                ctx.stroke();
            }
        }
    
        const stars = Array.from({ length: COUNT }, () => new Star(0, 0, 0));
        let rafId = 0;
    
        const canvas = document.querySelector("#starfield-canvas");
        const ctx = canvas?.getContext("2d");
    
        const container = document.querySelector("#starfield");
        const resizeObserver = new ResizeObserver(setup);
    
        if (ctx) {
            resizeObserver.observe(container);
        }
    
        function setup() {
            rafId > 0 && cancelAnimationFrame(rafId);
        
            const { clientWidth: width, clientHeight: height } = container;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.scale(dpr, dpr);
        
            for (const star of stars) {
                star.x = Math.random() * width - width / 2;
                star.y = Math.random() * height - height / 2;
                star.z = 0;
            }
        
            ctx.translate(width / 2, height / 2);
            ctx.fillStyle = BG_COLOR;
            ctx.strokeStyle = "white";
            rafId = requestAnimationFrame(frame);
        }
    
        function frame() {
            const { clientWidth: width, clientHeight: height } = container;
        
            for (const star of stars) {
                star.update(width, height, SPEED);
                star.draw(ctx);
            }
        
            ctx.fillRect(-width / 2, -height / 2, width, height);
            rafId = requestAnimationFrame(frame);
        }
    })
  </script>
  
<template>
    <div ref="_container" id="starfield" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0;">
        <canvas ref="_canvas" id="starfield-canvas"></canvas>
    </div>
</template>