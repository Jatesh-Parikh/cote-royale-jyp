"use client";

import { asImageSrc, Content } from "@prismicio/client";
import { StartScreen } from "./StartScreen";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Question } from "./Question";
import { FragranceType, Vote, Votes } from "./types";
import { Results } from "./Results";
