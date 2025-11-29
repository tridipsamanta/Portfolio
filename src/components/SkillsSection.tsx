import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Matter from 'matter-js';
import SkillIcons from './SkillIcons';

const skills = [
  { name: 'Python', color: '#3776AB' },
  { name: 'Java', color: '#ED8B00' },
  { name: 'React', color: '#61DAFB' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'HTML', color: '#E34F26' },
  { name: 'CSS', color: '#1572B6' },
  { name: 'C', color: '#659AD3' },
  { name: 'Git', color: '#F34F29' },
  { name: 'Tailwind', color: '#0EA5A4' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'NodeJS', color: '#339933' },
  { name: 'Excel', color: '#217346' },
  { name: 'Photoshop', color: '#001E36' },
  { name: 'VSCode', color: '#007ACC' },
  { name: 'ThreeJS', color: '#6B7280' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Firebase', color: '#FFCA28' },
  // 10 additional language skill cards
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Ruby', color: '#CC342D' },
  { name: 'Rust', color: '#DEA584' },
  { name: 'Go', color: '#00ADD8' },
  { name: 'Kotlin', color: '#7F52FF' },
  { name: 'Dart', color: '#00B4AB' },
  { name: 'Bash', color: '#89E051' },
  { name: 'Haskell', color: '#5D3FD3' },
  { name: 'C#', color: '#239120' },
  { name: 'C++', color: '#00599C' },
];

interface SkillBody extends Matter.Body {
  skillIndex?: number;
}

export function SkillsSection() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const skillRefs = useRef<HTMLDivElement[]>([]);
  const bodyRefs = useRef<any[]>([]);
  const [isDragging, setIsDragging] = useState<number | null>(null);

  const draggingRef = useRef<{
    index: number;
    pointerId: number;
    startX: number;
    startY: number;
    active: boolean;
    last: { x: number; y: number; t: number }[];
  } | null>(null);

  const PHYS = {
    restitution: 0.12,
    friction: 0.18,
    frictionAir: 0.06,
    velocityScale: 0.08,
    maxAngular: 1.2,
    angularDampingFactor: 0.96,
    bounceDamp: 0.45,
    moveThreshold: 6,
  };

  const hexToRgba = (hex: string, alpha = 1) => {
    const h = hex.replace('#', '');
    const bigint = parseInt(
      h.length === 3 ? h.split('').map(c => c + c).join('') : h,
      16
    );
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const handlePointerDown = (e: React.PointerEvent, index: number) => {
    const el = skillRefs.current[index];
    if (!el || !canvasContainerRef.current) return;

    try {
      el.setPointerCapture(e.pointerId);
    } catch {}

    draggingRef.current = {
      index,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      active: false,
      last: [{ x: e.clientX, y: e.clientY, t: Date.now() }],
    };
    setIsDragging(index);

    window.addEventListener('pointermove', onPointerMove, { passive: false });
    window.addEventListener('pointerup', onPointerUp);
  };

  const onPointerMove = (ev: PointerEvent) => {
    const dr = draggingRef.current;
    if (!dr) return;
    const { index } = dr;
    const el = skillRefs.current[index];
    const body = bodyRefs.current[index];
    if (!el || !body || !canvasContainerRef.current) return;

    const rect = canvasContainerRef.current.getBoundingClientRect();
    const x = ev.clientX - rect.left;
    const y = ev.clientY - rect.top;

    if (!dr.active) {
      const dx = ev.clientX - dr.startX;
      const dy = ev.clientY - dr.startY;
      const dist = Math.hypot(dx, dy);
      if (dist > PHYS.moveThreshold) {
        dr.active = true;
        try {
          ev.preventDefault();
        } catch {}
        el.style.cursor = 'grabbing';
        el.style.transition = 'transform 0s';
      } else {
        return;
      }
    } else {
      try {
        ev.preventDefault();
      } catch {}
    }

    Matter.Body.setPosition(body, {
      x: Math.max(20, Math.min(rect.width - 20, x)),
      y: Math.max(20, Math.min(rect.height - 20, y)),
    });

    dr.last.push({ x: ev.clientX, y: ev.clientY, t: Date.now() });
    if (dr.last.length > 6) dr.last.shift();
  };

  const onPointerUp = (ev: PointerEvent) => {
    const dr = draggingRef.current;
    if (!dr) return;
    const { index, pointerId } = dr;
    const el = skillRefs.current[index];
    const body = bodyRefs.current[index];
    if (el) {
      try {
        el.releasePointerCapture(pointerId);
      } catch {}
      el.style.cursor = 'grab';
      el.style.transition = 'transform 220ms ease, box-shadow 220ms ease';
    }

    if (!dr.active) {
      draggingRef.current = null;
      setIsDragging(null);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      return;
    }

    if (body && dr.last.length >= 2) {
      const a = dr.last[dr.last.length - 1];
      const b = dr.last[Math.max(0, dr.last.length - 4)];
      const dt = Math.max(8, a.t - b.t) / 1000;
      const vx = (a.x - b.x) / dt;
      const vy = (a.y - b.y) / dt;

      Matter.Body.setVelocity(body, {
        x: vx * PHYS.velocityScale,
        y: vy * PHYS.velocityScale,
      });
      const ang = Math.max(
        -PHYS.maxAngular,
        Math.min(PHYS.maxAngular, vx / 5000)
      );
      Matter.Body.setAngularVelocity(body, ang);
    }

    draggingRef.current = null;
    setIsDragging(null);
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
  };

  useEffect(() => {
    if (!canvasContainerRef.current) return;

    const { Engine, Runner, Bodies, Composite, Events } = Matter;

    const containerHeight = 500;

    const engine = Engine.create({ gravity: { x: 0, y: 0.9 } });
    engineRef.current = engine;

    const wallThickness = 50;
    const rect = canvasContainerRef.current.getBoundingClientRect();
    let containerWidth = rect.width;

    const walls = [
      Bodies.rectangle(
        containerWidth / 2,
        containerHeight + wallThickness / 2,
        containerWidth + 100,
        wallThickness,
        { isStatic: true }
      ),
      Bodies.rectangle(
        -wallThickness / 2,
        containerHeight / 2,
        wallThickness,
        containerHeight * 2,
        { isStatic: true }
      ),
      Bodies.rectangle(
        containerWidth + wallThickness / 2,
        containerHeight / 2,
        wallThickness,
        containerHeight * 2,
        { isStatic: true }
      ),
    ];

    Composite.add(engine.world, walls);

    const boxWidth = 90;
    const boxHeight = 100;

    const skillBodies: SkillBody[] = skills.map((skill, index) => {
      const cols = Math.max(1, Math.ceil(containerWidth / 120));
      const x = 80 + (index % cols) * 110 + (Math.random() - 0.5) * 40;
      const y =
        60 + Math.floor(index / cols) * 110 + (Math.random() - 0.5) * 30;

      const body = Bodies.rectangle(x, y, boxWidth, boxHeight, {
        chamfer: { radius: 12 },
        restitution: PHYS.restitution,
        friction: PHYS.friction,
        frictionAir: PHYS.frictionAir,
      }) as SkillBody;

      body.skillIndex = index;
      return body;
    });

    Composite.add(engine.world, skillBodies);
    bodyRefs.current = skillBodies;

    Events.on(engine, 'afterUpdate', () => {
      if (!canvasContainerRef.current) return;
      const r = canvasContainerRef.current.getBoundingClientRect();
      const curW = r.width;
      const minX = boxWidth / 2;
      const maxX = curW - boxWidth / 2;
      const minY = boxHeight / 2;
      const maxY = containerHeight - boxHeight / 2;

      for (let i = 0; i < skillBodies.length; i++) {
        const b = skillBodies[i];
        const el = skillRefs.current[i];
        if (!el) continue;

        if (b.angularVelocity) {
          const av = b.angularVelocity * PHYS.angularDampingFactor;
          Matter.Body.setAngularVelocity(
            b,
            Math.max(-PHYS.maxAngular, Math.min(PHYS.maxAngular, av))
          );
        }

        let px = b.position.x;
        let py = b.position.y;
        let vx = b.velocity.x;
        let vy = b.velocity.y;
        let corrected = false;

        if (px < minX) {
          px = minX;
          vx = Math.abs(vx) * PHYS.bounceDamp;
          corrected = true;
        } else if (px > maxX) {
          px = maxX;
          vx = -Math.abs(vx) * PHYS.bounceDamp;
          corrected = true;
        }

        if (py < minY) {
          py = minY;
          vy = Math.abs(vy) * PHYS.bounceDamp;
          corrected = true;
        } else if (py > maxY) {
          py = maxY;
          vy = -Math.abs(vy) * PHYS.bounceDamp;
          corrected = true;
        }

        if (corrected) {
          Matter.Body.setPosition(b, { x: px, y: py });
          Matter.Body.setVelocity(b, { x: vx, y: vy });
          Matter.Body.setAngularVelocity(b, (b.angularVelocity || 0) * 0.5);
        }

        const speed = Math.hypot(b.velocity.x, b.velocity.y);
        if (speed < 0.04 && Math.abs(b.angularVelocity) < 0.02) {
          Matter.Body.setVelocity(b, { x: 0, y: 0 });
          Matter.Body.setAngularVelocity(b, 0);
        }

        const left = px - boxWidth / 2;
        const top = py - boxHeight / 2;
        el.style.transform = `translate3d(${left}px, ${top}px, 0) rotate(${b.angle}rad)`;

        const inner = el.firstElementChild as HTMLElement | null;
        if (inner) {
          const isBeingDragged =
            draggingRef.current && draggingRef.current.index === i;
          const speedFactor = Math.min(
            1,
            Math.hypot(b.velocity.x, b.velocity.y) / 6
          );
          const extra = speedFactor * 0.18;
          const outerShadow = isBeingDragged
            ? `0 12px 30px rgba(0,0,0,0.35), 0 0 30px ${hexToRgba(
                skills[i].color,
                0.26
              )}`
            : `0 10px 22px rgba(0,0,0,0.35), 0 0 ${
                12 + extra * 30
              }px ${hexToRgba(skills[i].color, 0.12 + extra)}`;
          const innerGlow = isBeingDragged
            ? hexToRgba(skills[i].color, 0.12)
            : hexToRgba(skills[i].color, 0.06 + extra * 0.2);
          inner.style.boxShadow = `inset 0 0 10px ${innerGlow}, ${outerShadow}`;
        }
      }
    });

    const runner = Runner.create();
    Runner.run(runner, engine);

    const handleResize = () => {
      if (!canvasContainerRef.current) return;
      const newWidth = canvasContainerRef.current.clientWidth;
      containerWidth = newWidth;
      Matter.Body.setPosition(walls[2], {
        x: newWidth + wallThickness / 2,
        y: containerHeight / 2,
      });
      Matter.Body.setPosition(walls[0], {
        x: newWidth / 2,
        y: containerHeight + wallThickness / 2,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Runner.stop(runner);
      Engine.clear(engine);
    };
  }, []);

  return (
    <section id="skills" className="section-padding relative bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Skills </span>
            <span className="gradient-text">Playground</span>
          </h2>
          <p className="text-muted-foreground">
            Drag, throw, and watch them bounce. Nothing escapes!
          </p>
        </motion.div>

        <div
          className="relative w-full mx-auto"
          style={{ height: '520px', maxWidth: '1100px' }}
        >
          <div
            aria-hidden
            className="absolute -inset-4 rounded-2xl pointer-events-none"
            style={{
              borderRadius: 20,
              background:
                'linear-gradient(90deg, rgba(84,84,255,0.16), rgba(163,0,255,0.14), rgba(0,255,232,0.10))',
              filter: 'blur(28px)',
              boxShadow:
                '0 30px 80px rgba(84,84,255,0.10), 0 60px 140px rgba(163,0,255,0.06)',
              zIndex: 0,
            }}
          />

          <div
            ref={sceneRef}
            className="relative w-full rounded-2xl border border-border/30 overflow-hidden"
            style={{
              height: '100%',
              background: '#0d0f12',
              zIndex: 10,
              position: 'relative',
              borderRadius: 20,
            }}
          >
            {/* physics container – no pointer events, just for size */}
            <div
              ref={canvasContainerRef}
              className="absolute inset-0"
              style={{
                touchAction: 'pan-y',
                zIndex: 1,
                pointerEvents: 'none', // <- IMPORTANT FIX
              }}
            />

            {/* Skill boxes */}
            {skills.map((skill, index) => {
              const textColor = ['JavaScript', 'Excel', 'Firebase'].includes(
                skill.name
              )
                ? '#000'
                : '#fff';
              const active = isDragging === index;
              const baseGlow = hexToRgba(skill.color, 0.1);
              const hoverGlow = hexToRgba(skill.color, 0.22);
              const innerBase = hexToRgba(skill.color, 0.06);
              const innerActive = hexToRgba(skill.color, 0.12);

              return (
                <div
                  key={skill.name}
                  ref={el => {
                    skillRefs.current[index] = el as HTMLDivElement;
                  }}
                  className="absolute select-none"
                  onPointerDown={e => handlePointerDown(e, index)}
                  style={{
                    left: 0,
                    top: 0,
                    width: 90,
                    height: 100,
                    transform: 'translate3d(-9999px,-9999px,0)',
                    transition: 'transform 120ms linear',
                    touchAction: 'none',
                    zIndex: 10, // <- ABOVE THE CANVAS LAYER
                  }}
                >
                  <div
                    className="w-full h-full rounded-xl flex flex-col items-center justify-center gap-1"
                    style={{
                      backgroundColor: skill.color,
                      boxShadow: `inset 0 0 10px ${
                        active ? innerActive : innerBase
                      }, 0 12px 30px rgba(0,0,0,0.35), 0 0 ${
                        active ? 26 : 14
                      }px ${active ? hoverGlow : baseGlow}`,
                      cursor: 'grab',
                      border: '1px solid rgba(255,255,255,0.04)',
                      transition: 'box-shadow 200ms ease, transform 160ms ease',
                    }}
                  >
                    {SkillIcons[skill.name]}
                    <span
                      className="text-xs font-bold px-1 text-center leading-tight"
                      style={{ color: textColor }}
                    >
                      {skill.name}
                    </span>
                  </div>
                </div>
              );
            })}

            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
