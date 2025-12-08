"use client";

import { Fragment, useState } from "react";
import { Content, ImageField } from "@prismicio/client";
import { AnswerOption, FragranceType } from "./types";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PrismicNextImage } from "@prismicio/next";

gsap.registerPlugin(useGSAP);

type QuestionProps = {
  question: Content.QuizDocumentDataQuestionsItem;
  questionNumber: number;
  totalQuestions: number;
  onAnswerSelected: (fragranceType: FragranceType) => void;
  onBack: () => void;
};

export const Question = ({
  onAnswerSelected,
  onBack,
  question,
  questionNumber,
  totalQuestions,
}: QuestionProps) => {};
