import { gsap } from "gsap";

export class HoverImgFx {
  el: HTMLElement;
  reveal: HTMLElement;
  revealInner: HTMLElement;
  revealImg: HTMLElement;

  quickX: (v: number) => void = () => {};
  quickY: (v: number) => void = () => {};

  // store handlers for cleanup
  private onEnter!: (e: MouseEvent) => void;
  private onMove!: (e: MouseEvent) => void;
  private onLeave!: () => void;

  constructor(el: HTMLElement) {
    this.el = el;

    const imgSrc = el.dataset.img || "";

    this.reveal = document.createElement("div");
    this.reveal.className = "xb-img-reveal-wrapper";
    this.reveal.style.opacity = "0";
    this.reveal.style.pointerEvents = "none";

    this.reveal.innerHTML = `
      <div class="xb-img-reveal-wrapper__inner">
        <div class="xb-img-reveal-wrapper__img">
          <div class="xb-hover-wrapper">
            <img src="${imgSrc}" alt="">
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(this.reveal);

    this.revealInner = this.reveal.querySelector(
      ".xb-img-reveal-wrapper__inner"
    )!;
    this.revealImg = this.reveal.querySelector(
      ".xb-img-reveal-wrapper__img"
    )!;

    this.revealInner.style.overflow = "hidden";

    this.quickX = gsap.quickTo(this.reveal, "x", {
      duration: 0.25,
      ease: "power3.out",
    });

    this.quickY = gsap.quickTo(this.reveal, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    this.initEvents();
  }

  getMousePos(e: MouseEvent) {
    return { x: e.pageX, y: e.pageY };
  }

  positionElement(e: MouseEvent) {
    const { x, y } = this.getMousePos(e);

    const clampedY = gsap.utils.clamp(0, 300, y + 20);

    this.quickX(x + 20);
    this.quickY(clampedY);
  }

  initEvents() {
    this.onEnter = (e: MouseEvent) => {
      this.positionElement(e);
      this.showImage();
    };

    this.onMove = (e: MouseEvent) => {
      requestAnimationFrame(() => this.positionElement(e));
    };

    this.onLeave = () => {
      this.hideImage();
    };

    this.el.addEventListener("mouseenter", this.onEnter);
    this.el.addEventListener("mousemove", this.onMove);
    this.el.addEventListener("mouseleave", this.onLeave);
  }

  destroy() {
    this.el.removeEventListener("mouseenter", this.onEnter);
    this.el.removeEventListener("mousemove", this.onMove);
    this.el.removeEventListener("mouseleave", this.onLeave);

    this.reveal.remove();
  }

  showImage() {
    gsap.killTweensOf([this.revealInner, this.revealImg]);

    gsap.set(this.el, { zIndex: 10 });
    gsap.set(this.reveal, { opacity: 1 });

    gsap
      .timeline()
      .fromTo(
        this.revealInner,
        { x: "-100%" },
        { x: "0%", duration: 0.3, ease: "sine.out" }
      )
      .fromTo(
        this.revealImg,
        { x: "100%" },
        { x: "0%", duration: 0.3, ease: "sine.out" },
        "<"
      );
  }

  hideImage() {
    gsap.killTweensOf([this.revealInner, this.revealImg]);

    gsap
      .timeline({
        onComplete: () => {
          gsap.set(this.el, { zIndex: "" });
          gsap.set(this.reveal, { opacity: 0 });
        },
      })
      .to(this.revealInner, {
        x: "100%",
        duration: 0.3,
        ease: "sine.in",
      })
      .to(
        this.revealImg,
        { x: "-100%", duration: 0.3, ease: "sine.in" },
        "<"
      );
  }
}
