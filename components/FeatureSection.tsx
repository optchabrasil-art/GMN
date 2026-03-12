'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc?: string;
  reverse?: boolean;
  bgColor?: string;
}

export function FeatureSection({ title, description, imageSrc, reverse = false, bgColor = 'bg-white' }: FeatureSectionProps) {
  return (
    <section className={`py-12 sm:py-16 lg:py-24 2xl:py-32 ${bgColor}`}>
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 2xl:px-12 flex flex-col ${imageSrc ? (reverse ? 'lg:flex-row-reverse' : 'lg:flex-row') : 'items-center justify-center'} items-center gap-10 md:gap-16 lg:gap-20 2xl:gap-32`}>
        {imageSrc && (
          <div className="flex-1 w-full">
            <motion.div
              initial={{ opacity: 0, x: reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square w-full max-w-[320px] sm:max-w-md lg:max-w-lg 2xl:max-w-2xl mx-auto flex items-center justify-center"
            >
              <Image 
                src={imageSrc} 
                alt={title} 
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        )}
        <div className={`flex-1 w-full max-w-xl 2xl:max-w-3xl ${imageSrc ? 'text-center lg:text-left' : 'text-center mx-auto'}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-5xl font-bold text-[#3c4043] mb-4 sm:mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-base sm:text-lg 2xl:text-xl text-[#5f6368] leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
