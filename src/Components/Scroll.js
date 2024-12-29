import React , { useRef, useState }from 'react'
import "./scroll.css"

const Scroll = () => {
    const scrollRef = useRef(null);
    const [cursorDirection, setCursorDirection] = useState("default");
    const handleMouseMove = (event) => {
      const { clientX } = event;
      const { offsetWidth } = scrollRef.current;
      const center = offsetWidth / 2;

      if (clientX < center) {
        setCursorDirection("left");
      } else {
        setCursorDirection("right");
      }
      const distanceFromCenter = clientX - center;
  
      const scrollSpeed = 0.1;
  
      scrollRef.current.scrollLeft += distanceFromCenter * scrollSpeed;
    };
  
    const images = [
      "https://cdn.sanity.io/images/r115idoc/production/f350ccb2addc2aa56c03ad6692d90c33b13e6534-1148x1436.png?w=384&q=80&fit=clip&auto=format",
      "https://cdn.sanity.io/images/r115idoc/production/87f439c8888db195282e812af75148c61b9d7ee3-1148x920.png?w=384&q=80&fit=clip&auto=format",
      "https://cdn.sanity.io/images/r115idoc/production/03a2ac59bd53d9ea5f209c175663773635f3c86b-1148x1148.jpg?w=384&q=80&fit=clip&auto=format",
      "https://cdn.sanity.io/images/r115idoc/production/6cc75862d3d4dc612d91681e787be50bfd6008e3-1148x920.png?w=384&q=80&fit=clip&auto=format",
      "https://cdn.sanity.io/images/r115idoc/production/1e6ee3ee386d6fa8e4370609fe363930608de1a5-1148x1148.png?w=384&q=80&fit=clip&auto=format",
      "https://cdn.sanity.io/images/r115idoc/production/c12969ac91dd359ada6ab564a6ef7cdec718936b-1148x1436.png?w=384&q=80&fit=clip&auto=format",
      "https://cdn.sanity.io/images/r115idoc/production/65337416eee9b5c4a34f7ed455145e75a1541aa6-1148x1148.png?w=384&q=80&fit=clip&auto=format",
      "https://cdn.sanity.io/images/r115idoc/production/4f38374e3f2bddc378efdafd586eb77b30e63e04-1148x1436.jpg?w=384&q=80&fit=clip&auto=format",
      "https://cdn.sanity.io/images/r115idoc/production/a20b450f816e11b9f88859dc934a010116ef5c42-1148x920.png?w=384&q=80&fit=clip&auto=format",
      "https://cdn.sanity.io/images/r115idoc/production/5ea636fb9df56ebb3a32f44565761e9a5e9d63a6-1148x1148.png?w=384&q=80&fit=clip&auto=format",
      "https://cdn.sanity.io/images/r115idoc/production/dfe44198fb2b2c41befa5e04cb697a1ccd1b00e4-1148x920.png?w=384&q=80&fit=clip&auto=format",
    ];
  return (
    <div>
       <div
      className={`gallery-container ${cursorDirection}`}
      onMouseMove={handleMouseMove}
      ref={scrollRef}
    >
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery ${index}`} />
      ))}
    </div>
    </div>
  )
}

export default Scroll
