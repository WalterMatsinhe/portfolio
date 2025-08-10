"use client";;
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export function VideoText({
 src,
 children,
 className = "",
 autoPlay = true,
 muted = true,
 loop = true,
 preload = "auto",
 fontSize = 20,
 fontWeight = "bold",
 textAnchor = "middle",
 dominantBaseline = "middle",
 fontFamily = "sans-serif",
 as: Component = "div"
}) {
  const [svgMask, setSvgMask] = useState("");
  const content = React.Children.toArray(children).join("");

  useEffect(() => {
    const updateSvgMask = () => {
      const responsiveFontSize =
        typeof fontSize === "number" ? `${fontSize}vw` : fontSize;
      const newSvgMask = `<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'><text x='50%' y='50%' font-size='${responsiveFontSize}' font-weight='${fontWeight}' text-anchor='${textAnchor}' dominant-baseline='${dominantBaseline}' font-family='${fontFamily}'>${content}</text></svg>`;
      setSvgMask(newSvgMask);
    };

    updateSvgMask();
    window.addEventListener("resize", updateSvgMask);
    return () => window.removeEventListener("resize", updateSvgMask);
  }, [content, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily]);

  const dataUrlMask = `url("data:image/svg+xml,${encodeURIComponent(svgMask)}")`;

  return (
   <Component className={cn(`relative size-full`, className)}>
    {/* Create a container that masks the video to only show within text */}
    <div
     className="absolute inset-0 flex items-center justify-center"
     style={{
       maskImage: dataUrlMask,
       WebkitMaskImage: dataUrlMask,
       maskSize: "contain",
       WebkitMaskSize: "contain",
       maskRepeat: "no-repeat",
       WebkitMaskRepeat: "no-repeat",
       maskPosition: "center",
       WebkitMaskPosition: "center",
     }}>
      <video
       className="w-full h-full object-cover"
       autoPlay={autoPlay}
       muted={muted}
       loop={loop}
       preload={preload}
       playsInline>
        <source src={src} />
        Your browser does not support the video tag.
      </video>
    </div>
    {/* Add a backup text element for SEO/accessibility */}
    <span className="sr-only">{content}</span>
   </Component>
  );
}
