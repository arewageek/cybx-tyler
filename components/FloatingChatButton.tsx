
'use client';

import { Instagram, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface FloatingChatButtonProps {
    /** Platform to link to: 'whatsapp' | 'instagram' */
    platform: 'whatsapp' | 'instagram';
    /** Your WhatsApp number (with country code) or Instagram username */
    handle: string;
    /** Custom message for WhatsApp (optional) */
    message?: string;
    /** Position from bottom (in rem) */
    bottom?: number;
    /** Position from right (in rem) */
    right?: number;
    /** Primary color for the button */
    primaryColor?: string;
    /** Secondary color for hover effects */
    secondaryColor?: string;
    /** Button size in pixels */
    size?: number;
    /** Optional label to show next to the icon */
    label?: string;
    /** Whether to show the pulse animation */
    showPulse?: boolean;
}

export default function FloatingChatButton({
    platform = 'whatsapp',
    handle,
    message = 'Hello!',
    bottom = 2,
    right = 2,
    primaryColor = platform === 'whatsapp' ? '#25D366' : '#E1306C',
    secondaryColor = platform === 'whatsapp' ? '#128C7E' : '#C13584',
    size = 60,
    label,
    showPulse = true,
}: FloatingChatButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    const getUrl = () => {
        if (platform === 'whatsapp') {
            const encodedMessage = encodeURIComponent(message);
            return `https://wa.me/${handle}?text=${encodedMessage}`;
        }
        return `https://instagram.com/${handle}`;
    };

    return (
        <div
            className="fixed z-50"
            style={{
                bottom: `${bottom}rem`,
                right: `${right}rem`,
            }}
        >
            {/* Pulse Animation */}
            {showPulse && (
                <div
                    className="absolute inset-0 rounded-full animate-ping"
                    style={{ backgroundColor: primaryColor, opacity: 0.6 }}
                />
            )}

            {/* Main Button */}
            <a
                href={getUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                    "relative flex items-center justify-center rounded-full shadow-lg",
                    "transition-all duration-300 ease-in-out",
                    "hover:-translate-y-1 hover:shadow-xl",
                    "group"
                )}
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: primaryColor,
                    '--hover-bg': secondaryColor,
                } as React.CSSProperties}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Icon */}
                <div className={cn(
                    "transition-transform duration-300",
                    isHovered ? "rotate-[10deg]" : ""
                )}>
                    {platform === 'whatsapp' ? (
                        <MessageCircle
                            size={size * 0.5}
                            className="text-white"
                        />
                    ) : (
                        <Instagram
                            size={size * 0.5}
                            className="text-white"
                        />
                    )}
                </div>

                {/* Label */}
                {label && (
                    <div
                        className={cn(
                            "absolute right-full mr-3 px-3 py-2 rounded-md",
                            "text-sm text-white whitespace-nowrap",
                            "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                            "transition-all duration-300 ease-in-out"
                        )}
                        style={{ backgroundColor: primaryColor }}
                    >
                        {label}
                    </div>
                )}
            </a>
        </div>
    );
}