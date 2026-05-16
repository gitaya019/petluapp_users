// src/components/ui/HorizontalScroll.jsx

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import { useRef } from "react";

export default function HorizontalScroll({
    children,
}) {

    const scrollRef = useRef(null);

    const scroll = (direction) => {

        if (!scrollRef.current) return;

        const amount = 380;

        scrollRef.current.scrollBy({

            left:
                direction === "left"
                    ? -amount
                    : amount,

            behavior: "smooth",
        });
    };

    return (

        <div className="relative">

            <button
                onClick={() =>
                    scroll("left")
                }
                className="
                    absolute
                    left-0
                    top-1/2
                    -translate-y-1/2
                    z-10
                    bg-white
                    shadow-lg
                    border
                    border-gray-200
                    rounded-full
                    p-2
                    hover:scale-105
                    transition
                    cursor-pointer
                "
            >

                <ChevronLeft size={20} />

            </button>

            <div
                ref={scrollRef}
                className="
                    flex
                    gap-6
                    overflow-x-auto
                    scroll-smooth
                    pb-4
                    px-12

                    [&::-webkit-scrollbar]:hidden
                    [-ms-overflow-style:none]
                    [scrollbar-width:none]
                "
            >
                {children}
            </div>

            <button
                onClick={() =>
                    scroll("right")
                }
                className="
                    absolute
                    right-0
                    top-1/2
                    -translate-y-1/2
                    z-10
                    bg-white
                    shadow-lg
                    border
                    border-gray-200
                    rounded-full
                    p-2
                    hover:scale-105
                    transition
                    cursor-pointer
                "
            >

                <ChevronRight size={20} />

            </button>

        </div>
    );
}