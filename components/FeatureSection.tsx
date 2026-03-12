'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  bgColor?: string;
}

export function FeatureSection({ title, description, imageSrc, reverse = false, bgColor = 'bg-white' }: FeatureSectionProps) {
  return (
    <section className={`py-16 lg:py-24 ${bgColor}`}>
      <div className={`container mx-auto px-4 lg:px-8 flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square max-w-lg mx-auto flex items-center justify-center"
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
        <div className="flex-1 max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#3c4043] mb-6 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-[#5f6368] leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
