// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import { ThumbsUp, ThumbsDown, Send, Globe, Check, Lock, Sparkles, ChevronRight } from "lucide-react";
// // import { submitFeedback } from "@/lib/firebase";
// // import { toast } from "sonner";

// // type Language = "en" | "de";
// // type FeedbackType = "like" | "dislike" | null;

// // const translations = {
// //   en: {
// //     title: "How was your experience today?",
// //     subtitle: "Your opinion matters — helps us serve you better",
// //     quickNote: "Takes less than 20 seconds!",
// //     great: "Great",
// //     couldImprove: "Could Improve",
// //     anonymous: "Your feedback is",
// //     anonymousBold: "anonymous",
// //     anonymousEnd: "unless you enter contact info",
// //     dislikeTitle: "It seems we could have done better.",
// //     dislikeSubtitle: "We're sorry you weren't fully satisfied with your visit.",
// //     improve: "Could you please take a moment to tell us what we could do to improve?",
// //     comment: "Any specific feedback or details you'd like to share?",
// //     commentPlaceholder: "Share any thoughts here...",
// //     submit: "Submit Feedback",
// //     submitting: "Submitting...",
// //     success: "Thank you for your feedback!",
// //     error: "Please select at least one improvement area",
// //     checkboxes: [
// //       "Difficulties booking an appointment",
// //       "Long waiting time",
// //       "Staff friendliness or care",
// //       "Quality of treatment",
// //       "Billing or payment issues",
// //       "Online/digital process"
// //     ]
// //   },
// //   de: {
// //     title: "Wie war Ihre Erfahrung heute?",
// //     subtitle: "Ihre Meinung zählt — hilft uns, Sie besser zu bedienen",
// //     quickNote: "Dauert weniger als 20 Sekunden!",
// //     great: "Super",
// //     couldImprove: "Verbesserbar",
// //     anonymous: "Ihr Feedback ist",
// //     anonymousBold: "anonym",
// //     anonymousEnd: "sofern Sie keine Kontaktdaten angeben",
// //     dislikeTitle: "Es scheint, wir hätten es besser machen können.",
// //     dislikeSubtitle: "Es tut uns leid, dass Sie mit Ihrem Besuch nicht vollständig zufrieden waren.",
// //     improve: "Könnten Sie sich einen Moment Zeit nehmen, um uns zu sagen, was wir verbessern können?",
// //     comment: "Haben Sie spezifisches Feedback oder Details, die Sie teilen möchten?",
// //     commentPlaceholder: "Teilen Sie hier Ihre Gedanken...",
// //     submit: "Feedback absenden",
// //     submitting: "Wird gesendet...",
// //     success: "Vielen Dank für Ihr Feedback!",
// //     error: "Bitte wählen Sie mindestens einen Verbesserungsbereich",
// //     checkboxes: [
// //       "Schwierigkeiten bei der Terminbuchung",
// //       "Lange Wartezeit",
// //       "Freundlichkeit oder Fürsorge des Personals",
// //       "Qualität der Behandlung",
// //       "Abrechnungs- oder Zahlungsprobleme",
// //       "Online-/digitaler Prozess"
// //     ]
// //   }
// // };

// // const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/RMon6kBM4EjkUDE28";

// // const FeedbackForm = () => {
// //   const [lang, setLang] = useState<Language>(
// //     navigator.language.startsWith("de") ? "de" : "en"
// //   );
// //   const [feedbackType, setFeedbackType] = useState<FeedbackType>(null);
// //   const [improvements, setImprovements] = useState<string[]>([]);
// //   const [comment, setComment] = useState("");
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   const t = translations[lang];

// //   const handleLike = async () => {
// //     setFeedbackType("like");
    
// //     try {
// //       await submitFeedback({
// //         type: "like",
// //         language: lang
// //       });
// //     } catch (error) {
// //       console.error("Error storing like:", error);
// //     }
    
// //     window.open(GOOGLE_REVIEW_URL, "_blank");
// //   };

// //   const handleDislike = () => {
// //     setFeedbackType("dislike");
// //   };

// //   const toggleImprovement = (item: string) => {
// //     setImprovements((prev) =>
// //       prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
// //     );
// //   };

// //   const handleSubmit = async () => {
// //     if (improvements.length === 0) {
// //       toast.error(t.error);
// //       return;
// //     }

// //     setIsSubmitting(true);

// //     try {
// //       await submitFeedback({
// //         type: "dislike",
// //         improvements,
// //         comment: comment || undefined,
// //         language: lang
// //       });

// //       setIsSubmitted(true);
// //       toast.success(t.success);
// //     } catch (error) {
// //       toast.error("Something went wrong. Please try again.");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   const toggleLang = () => {
// //     setLang((prev) => (prev === "en" ? "de" : "en"));
// //   };

// //   if (isSubmitted) {
// //     return (
// //       <div className="min-h-screen clean-bg flex items-center justify-center p-4">
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           className="clean-card rounded-2xl p-10 max-w-md w-full text-center relative z-10"
// //         >
// //           <motion.div
// //             initial={{ scale: 0 }}
// //             animate={{ scale: 1 }}
// //             transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
// //             className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center"
// //           >
// //             <Check className="w-10 h-10 text-primary" />
// //           </motion.div>
// //           <h2 className="text-2xl font-semibold text-foreground mb-2">
// //             {t.success}
// //           </h2>
// //           <p className="text-muted-foreground">
// //             {lang === "en" 
// //               ? "We appreciate you taking the time to help us improve."
// //               : "Wir schätzen es, dass Sie sich die Zeit genommen haben, uns zu helfen."}
// //           </p>
// //         </motion.div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen clean-bg flex items-center justify-center p-4">
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="clean-card rounded-2xl p-8 md:p-10 max-w-lg w-full relative z-10"
// //       >
// //         {/* Language Toggle */}
// //         <div className="flex justify-end mb-2">
// //           <button
// //             onClick={toggleLang}
// //             className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
// //           >
// //             <Globe className="w-4 h-4" />
// //             {lang === "en" ? "DE" : "EN"}
// //           </button>
// //         </div>

// //         <AnimatePresence mode="wait">
// //           {feedbackType !== "dislike" ? (
// //             <motion.div
// //               key="main"
// //               initial={{ opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               exit={{ opacity: 0 }}
// //             >
// //               {/* Header */}
// //               <div className="text-center mb-8">
// //                 <motion.h1
// //                   key={lang + "-title"}
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   className="text-2xl md:text-3xl font-bold text-foreground mb-3"
// //                 >
// //                   {t.title}
// //                 </motion.h1>
// //                 <motion.p
// //                   key={lang + "-subtitle"}
// //                   initial={{ opacity: 0 }}
// //                   animate={{ opacity: 1 }}
// //                   className="text-muted-foreground"
// //                 >
// //                   {t.subtitle}
// //                 </motion.p>
// //               </div>

// //               {/* Quick Note */}
// //               <div className="flex items-center justify-center gap-2 mb-8">
// //                 <div className="h-px bg-border flex-1" />
// //                 <div className="flex items-center gap-2 text-sm text-primary font-medium px-4">
// //                   <Sparkles className="w-4 h-4" />
// //                   {t.quickNote}
// //                 </div>
// //                 <div className="h-px bg-border flex-1" />
// //               </div>

// //               {/* Feedback Buttons */}
// //               <div className="grid grid-cols-2 gap-4 mb-8">
// //                 <motion.button
// //                   whileHover={{ scale: 1.02 }}
// //                   whileTap={{ scale: 0.98 }}
// //                   onClick={handleLike}
// //                   className={`feedback-btn rounded-2xl p-6 flex flex-col items-center gap-3 ${
// //                     feedbackType === "like" ? "feedback-btn-active" : ""
// //                   }`}
// //                 >
// //                   <ThumbsUp
// //                     className={`w-12 h-12 transition-colors ${
// //                       feedbackType === "like"
// //                         ? "text-primary-foreground"
// //                         : "text-primary"
// //                     }`}
// //                   />
// //                   <span className={`font-semibold text-lg ${
// //                     feedbackType === "like"
// //                       ? "text-primary-foreground"
// //                       : "text-foreground"
// //                   }`}>
// //                     {t.great}
// //                   </span>
// //                 </motion.button>

// //                 <motion.button
// //                   whileHover={{ scale: 1.02 }}
// //                   whileTap={{ scale: 0.98 }}
// //                   onClick={handleDislike}
// //                   className="feedback-btn rounded-2xl p-6 flex flex-col items-center gap-3"
// //                 >
// //                   <ThumbsDown className="w-12 h-12 text-muted-foreground" />
// //                   <span className="font-semibold text-lg text-foreground">
// //                     {t.couldImprove}
// //                   </span>
// //                 </motion.button>
// //               </div>

// //               {/* Anonymous Note */}
// //               <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
// //                 <Lock className="w-4 h-4" />
// //                 <span>
// //                   {t.anonymous} <strong>{t.anonymousBold}</strong> {t.anonymousEnd}
// //                 </span>
// //               </div>
// //             </motion.div>
// //           ) : (
// //             <motion.div
// //               key="dislike-form"
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               exit={{ opacity: 0 }}
// //               className="overflow-hidden"
// //             >
// //               {/* Dislike Header */}
// //               <div className="text-center mb-6">
// //                 <h1 className="text-xl md:text-2xl font-bold text-foreground mb-2">
// //                   {t.dislikeTitle}
// //                 </h1>
// //                 <p className="text-muted-foreground text-sm mb-4">
// //                   {t.dislikeSubtitle}
// //                 </p>
// //                 <p className="text-foreground">
// //                   {t.improve}
// //                 </p>
// //               </div>

// //               {/* Improvement Areas - Grid */}
// //               <div className="grid grid-cols-2 gap-3 mb-6">
// //                 {t.checkboxes.map((item, index) => (
// //                   <motion.label
// //                     key={index}
// //                     whileHover={{ scale: 1.01 }}
// //                     whileTap={{ scale: 0.99 }}
// //                     className={`checkbox-item rounded-xl p-3 cursor-pointer flex items-center gap-3 ${
// //                       improvements.includes(item) ? "checkbox-item-active" : ""
// //                     }`}
// //                   >
// //                     <div
// //                       className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0 ${
// //                         improvements.includes(item)
// //                           ? "bg-primary border-primary"
// //                           : "border-muted-foreground/30"
// //                       }`}
// //                     >
// //                       {improvements.includes(item) && (
// //                         <Check className="w-3 h-3 text-primary-foreground" />
// //                       )}
// //                     </div>
// //                     <input
// //                       type="checkbox"
// //                       checked={improvements.includes(item)}
// //                       onChange={() => toggleImprovement(item)}
// //                       className="sr-only"
// //                     />
// //                     <span className="text-sm text-foreground leading-tight">{item}</span>
// //                   </motion.label>
// //                 ))}
// //               </div>

// //               {/* Comment */}
// //               <div className="mb-6">
// //                 <label className="block text-sm font-medium text-foreground mb-2">
// //                   {t.comment}
// //                 </label>
// //                 <textarea
// //                   value={comment}
// //                   onChange={(e) => setComment(e.target.value)}
// //                   className="w-full p-4 rounded-xl border border-input bg-muted/30 text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-muted-foreground"
// //                   rows={3}
// //                   placeholder={t.commentPlaceholder}
// //                 />
// //               </div>

// //               {/* Submit Button */}
// //               <motion.button
// //                 whileHover={{ scale: 1.01 }}
// //                 whileTap={{ scale: 0.99 }}
// //                 onClick={handleSubmit}
// //                 disabled={isSubmitting}
// //                 className="w-full py-4 rounded-xl submit-btn text-primary-foreground font-semibold flex items-center justify-center gap-3 transition-all disabled:opacity-70"
// //               >
// //                 {isSubmitting ? (
// //                   <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
// //                 ) : (
// //                   <>
// //                     <Send className="w-5 h-5" />
// //                     {t.submit}
// //                     <ChevronRight className="w-5 h-5" />
// //                   </>
// //                 )}
// //               </motion.button>

// //               {/* Anonymous Note */}
// //               <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
// //                 <Lock className="w-4 h-4" />
// //                 <span>
// //                   {t.anonymous} <strong>{t.anonymousBold}</strong> {t.anonymousEnd}
// //                 </span>
// //               </div>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default FeedbackForm;
// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   ThumbsUp,
// //   ThumbsDown,
// //   Send,
// //   Globe,
// //   Check,
// //   Lock,
// //   Sparkles,
// //   ChevronRight,
// // } from "lucide-react";
// // import { submitFeedback } from "@/lib/firebase";
// // import { toast } from "sonner";

// // type Language = "en" | "de";
// // type FeedbackType = "like" | "dislike" | null;

// // const translations = {
// //   en: {
// //     title: "How was your experience today?",
// //     subtitle: "Your opinion matters — helps us serve you better",
// //     quickNote: "Takes less than 20 seconds!",
// //     great: "Great",
// //     couldImprove: "Could Improve",
// //     anonymous: "Your feedback is",
// //     anonymousBold: "anonymous",
// //     anonymousEnd: "unless you enter contact info",
// //     dislikeTitle: "It seems we could have done better.",
// //     dislikeSubtitle: "We're sorry you weren't fully satisfied with your visit.",
// //     improve: "Could you please take a moment to tell us what we could do to improve?",
// //     comment: "Any specific feedback or details you'd like to share?",
// //     commentPlaceholder: "Share any thoughts here...",
// //     submit: "Submit Feedback",
// //     submitting: "Submitting...",
// //     success: "Thank you for your feedback!",
// //     error: "Please select at least one improvement area",
// //     checkboxes: [
// //       "Difficulties booking an appointment",
// //       "Long waiting time",
// //       "Staff friendliness or care",
// //       "Quality of treatment",
// //       "Billing or payment issues",
// //       "Online/digital process",
// //     ],
// //   },
// //   de: {
// //     title: "Wie war Ihre Erfahrung heute?",
// //     subtitle: "Ihre Meinung zählt — hilft uns, Sie besser zu bedienen",
// //     quickNote: "Dauert weniger als 20 Sekunden!",
// //     great: "Super",
// //     couldImprove: "Verbesserbar",
// //     anonymous: "Ihr Feedback ist",
// //     anonymousBold: "anonym",
// //     anonymousEnd: "sofern Sie keine Kontaktdaten angeben",
// //     dislikeTitle: "Es scheint, wir hätten es besser machen können.",
// //     dislikeSubtitle:
// //       "Es tut uns leid, dass Sie mit Ihrem Besuch nicht vollständig zufrieden waren.",
// //     improve:
// //       "Könnten Sie sich einen Moment Zeit nehmen, um uns zu sagen, was wir verbessern können?",
// //     comment: "Haben Sie spezifisches Feedback oder Details?",
// //     commentPlaceholder: "Teilen Sie hier Ihre Gedanken...",
// //     submit: "Feedback absenden",
// //     submitting: "Wird gesendet...",
// //     success: "Vielen Dank für Ihr Feedback!",
// //     error: "Bitte wählen Sie mindestens einen Verbesserungsbereich",
// //     checkboxes: [
// //       "Schwierigkeiten bei der Terminbuchung",
// //       "Lange Wartezeit",
// //       "Freundlichkeit oder Fürsorge des Personals",
// //       "Qualität der Behandlung",
// //       "Abrechnungs- oder Zahlungsprobleme",
// //       "Online-/digitaler Prozess",
// //     ],
// //   },
// // };

// // const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/RMon6kBM4EjkUDE28";

// // const FeedbackForm = () => {
// //   const [lang, setLang] = useState<Language>(
// //     navigator.language.startsWith("de") ? "de" : "en"
// //   );
// //   const [feedbackType, setFeedbackType] = useState<FeedbackType>(null);
// //   const [improvements, setImprovements] = useState<string[]>([]);
// //   const [comment, setComment] = useState("");
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [isSubmitted, setIsSubmitted] = useState(false);

// //   const t = translations[lang];

// //   const handleLike = async () => {
// //     setFeedbackType("like");
// //     try {
// //       await submitFeedback({ type: "like", language: lang });
// //     } catch {}
// //     window.open(GOOGLE_REVIEW_URL, "_blank");
// //   };

// //   const handleDislike = () => {
// //     setFeedbackType("dislike");
// //   };

// //   const toggleImprovement = (item: string) => {
// //     setImprovements((prev) =>
// //       prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
// //     );
// //   };

// //   const handleSubmit = async () => {
// //     if (improvements.length === 0) {
// //       toast.error(t.error);
// //       return;
// //     }

// //     setIsSubmitting(true);
// //     try {
// //       await submitFeedback({
// //         type: "dislike",
// //         improvements,
// //         comment: comment || undefined,
// //         language: lang,
// //       });
// //       setIsSubmitted(true);
// //       toast.success(t.success);
// //     } catch {
// //       toast.error("Something went wrong");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   if (isSubmitted) {
// //     return (
// //       <div className="min-h-screen clean-bg flex items-center justify-center p-4">
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.9 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           className="clean-card rounded-2xl p-10 max-w-md w-full text-center"
// //         >
// //           <Check className="w-12 h-12 mx-auto text-primary mb-4" />
// //           <h2 className="text-2xl font-semibold">{t.success}</h2>
// //         </motion.div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="min-h-screen clean-bg flex items-center justify-center p-4">
// //       <motion.div className="clean-card rounded-2xl p-8 md:p-10 max-w-lg w-full">
// //         {/* Language Toggle */}
// //         <div className="flex justify-end mb-4">
// //           <button
// //             onClick={() => setLang(lang === "en" ? "de" : "en")}
// //             className="flex items-center gap-2 text-sm text-primary font-medium"
// //           >
// //             <Globe className="w-4 h-4" />
// //             {lang === "en" ? "DE" : "EN"}
// //           </button>
// //         </div>

// //         {/* MAIN CONTENT */}
// //         <div className="text-center mb-8">
// //           <h1 className="text-2xl md:text-3xl font-bold mb-2">{t.title}</h1>
// //           <p className="text-muted-foreground">{t.subtitle}</p>
// //         </div>

// //         <div className="flex items-center justify-center gap-2 mb-8">
// //           <Sparkles className="w-4 h-4 text-primary" />
// //           <span className="text-sm text-primary font-medium">
// //             {t.quickNote}
// //           </span>
// //         </div>

// //         {/* THUMBS */}
// //         <div className="grid grid-cols-2 gap-4 mb-6">
// //           <button
// //             onClick={handleLike}
// //             className="feedback-btn rounded-2xl p-6 flex flex-col items-center gap-3"
// //           >
// //             <ThumbsUp className="w-10 h-10 text-primary" />
// //             {t.great}
// //           </button>

// //           <button
// //             onClick={handleDislike}
// //             className="feedback-btn rounded-2xl p-6 flex flex-col items-center gap-3"
// //           >
// //             <ThumbsDown className="w-10 h-10" />
// //             {t.couldImprove}
// //           </button>
// //         </div>

// //         {/* DISLIKE SECTION – OPENS BELOW */}
// //         <AnimatePresence>
// //           {feedbackType === "dislike" && (
// //             <motion.div
// //               initial={{ opacity: 0, height: 0 }}
// //               animate={{ opacity: 1, height: "auto" }}
// //               exit={{ opacity: 0, height: 0 }}
// //               transition={{ duration: 0.4 }}
// //               className="overflow-hidden border-t border-border pt-6 mt-6"
// //             >
// //               <p className="text-center mb-4">{t.improve}</p>

// //               <div className="grid grid-cols-2 gap-3 mb-4">
// //                 {t.checkboxes.map((item) => (
// //                   <label
// //                     key={item}
// //                     className="checkbox-item rounded-xl p-3 cursor-pointer"
// //                   >
// //                     <input
// //                       type="checkbox"
// //                       className="mr-2"
// //                       checked={improvements.includes(item)}
// //                       onChange={() => toggleImprovement(item)}
// //                     />
// //                     {item}
// //                   </label>
// //                 ))}
// //               </div>

// //               <textarea
// //                 value={comment}
// //                 onChange={(e) => setComment(e.target.value)}
// //                 className="w-full p-3 rounded-xl border mb-4"
// //                 rows={3}
// //                 placeholder={t.commentPlaceholder}
// //               />

// //               <button
// //                 onClick={handleSubmit}
// //                 disabled={isSubmitting}
// //                 className="w-full py-3 rounded-xl submit-btn text-primary-foreground"
// //               >
// //                 {isSubmitting ? t.submitting : t.submit}
// //               </button>
// //             </motion.div>
// //           )}
// //         </AnimatePresence>

// //         {/* Anonymous */}
// //         <div className="flex justify-center gap-2 text-sm text-muted-foreground mt-6">
// //           <Lock className="w-4 h-4" />
// //           {t.anonymous} <strong>{t.anonymousBold}</strong> {t.anonymousEnd}
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default FeedbackForm;
// // import { useState } from "react";
// // import { motion, AnimatePresence } from "framer-motion";
// // import {
// //   ThumbsUp,
// //   ThumbsDown,
// //   Globe,
// //   Check,
// //   Lock,
// //   Sparkles,
// // } from "lucide-react";
// // import { submitFeedback } from "@/lib/firebase";
// // import { toast } from "sonner";

// // type Language = "en" | "de";
// // type FeedbackType = "like" | "dislike" | null;

// // const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/RMon6kBM4EjkUDE28";

// // const translations = {
// //   en: {
// //     title: "How was your experience today?",
// //     subtitle: "Your opinion matters — helps us serve you better",
// //     quickNote: "Takes less than 20 seconds!",
// //     great: "Great",
// //     couldImprove: "Could Improve",
// //     anonymous: "Your feedback is",
// //     anonymousBold: "anonymous",
// //     anonymousEnd: "unless you enter contact info",
// //     improve:
// //       "Could you please take a moment to tell us what we could do to improve?",
// //     commentPlaceholder: "Share any thoughts here...",
// //     submit: "Submit Feedback",
// //     submitting: "Submitting...",
// //     successTitle: "Thank you for your feedback!",
// //     successText:
// //       "We truly appreciate you taking the time to share your experience. Your feedback helps us improve and serve you better.",
// //     close: "You may now safely close this page.",
// //     error: "Please select at least one improvement area",
// //     checkboxes: [
// //       "Difficulties booking an appointment",
// //       "Long waiting time",
// //       "Staff friendliness or care",
// //       "Quality of treatment",
// //       "Billing or payment issues",
// //       "Online/digital process",
// //     ],
// //   },
// //   de: {
// //     title: "Wie war Ihre Erfahrung heute?",
// //     subtitle: "Ihre Meinung zählt — hilft uns, Sie besser zu bedienen",
// //     quickNote: "Dauert weniger als 20 Sekunden!",
// //     great: "Super",
// //     couldImprove: "Verbesserbar",
// //     anonymous: "Ihr Feedback ist",
// //     anonymousBold: "anonym",
// //     anonymousEnd: "sofern Sie keine Kontaktdaten angeben",
// //     improve:
// //       "Könnten Sie sich einen Moment Zeit nehmen, um uns zu sagen, was wir verbessern können?",
// //     commentPlaceholder: "Teilen Sie hier Ihre Gedanken...",
// //     submit: "Feedback absenden",
// //     submitting: "Wird gesendet...",
// //     successTitle: "Vielen Dank für Ihr Feedback!",
// //     successText:
// //       "Vielen Dank, dass Sie sich die Zeit genommen haben. Ihr Feedback hilft uns, besser zu werden.",
// //     close: "Sie können diese Seite jetzt schließen.",
// //     error: "Bitte wählen Sie mindestens einen Verbesserungsbereich",
// //     checkboxes: [
// //       "Schwierigkeiten bei der Terminbuchung",
// //       "Lange Wartezeit",
// //       "Freundlichkeit oder Fürsorge des Personals",
// //       "Qualität der Behandlung",
// //       "Abrechnungs- oder Zahlungsprobleme",
// //       "Online-/digitaler Prozess",
// //     ],
// //   },
// // };

// // export default function FeedbackForm() {
// //   const [lang, setLang] = useState<Language>(
// //     navigator.language.startsWith("de") ? "de" : "en"
// //   );
// //   const [feedbackType, setFeedbackType] = useState<FeedbackType>(null);
// //   const [improvements, setImprovements] = useState<string[]>([]);
// //   const [comment, setComment] = useState("");
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [showThankYou, setShowThankYou] = useState(false);

// //   const t = translations[lang];

// //   const handleLike = async () => {
// //     try {
// //       await submitFeedback({ reaction: "like", language: lang });
// //     } catch {}
// //     window.open(GOOGLE_REVIEW_URL, "_blank");
// //     setShowThankYou(true);
// //   };

// //   const handleSubmitDislike = async () => {
// //     if (improvements.length === 0) {
// //       toast.error(t.error);
// //       return;
// //     }

// //     setIsSubmitting(true);
// //     try {
// //       await submitFeedback({
// //         reaction: "dislike",
// //         improvements:[...improvements],
// //         comment:comment.trim(),
// //         language: lang,
// //       });
// //       setShowThankYou(true);
// //     } catch {
// //       toast.error("Something went wrong");
// //     } finally {
// //       setIsSubmitting(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen clean-bg flex items-center justify-center p-4">
// //       <AnimatePresence mode="wait">
// //         {showThankYou ? (
// //           <motion.div
// //             key="thankyou"
// //             initial={{ opacity: 0, scale: 0.95 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="clean-card rounded-2xl p-10 max-w-md w-full text-center"
// //           >
// //             <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
// //               <Check className="w-8 h-8 text-primary" />
// //             </div>

// //             <h2 className="text-2xl font-semibold mb-4">
// //               {t.successTitle}
// //             </h2>

// //             <p className="text-muted-foreground leading-relaxed mb-6">
// //               {t.successText}
// //             </p>

// //             <div className="border-t pt-4 text-sm text-muted-foreground">
// //               {t.close}
// //             </div>
// //           </motion.div>
// //         ) : (
// //           <motion.div
// //             key="form"
// //             initial={{ opacity: 0, y: 10 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0 }}
// //             className="clean-card rounded-2xl p-8 md:p-10 max-w-lg w-full"
// //           >
// //             {/* Language */}
// //             <div className="flex justify-end mb-4">
// //               <button
// //                 onClick={() => setLang(lang === "en" ? "de" : "en")}
// //                 className="flex items-center gap-2 text-sm text-primary font-medium"
// //               >
// //                 <Globe className="w-4 h-4" />
// //                 {lang === "en" ? "DE" : "EN"}
// //               </button>
// //             </div>

// //             <div className="text-center mb-6">
// //               <h1 className="text-2xl font-bold mb-2">{t.title}</h1>
// //               <p className="text-muted-foreground">{t.subtitle}</p>
// //             </div>

// //             <div className="flex justify-center gap-2 mb-6">
// //               <Sparkles className="w-4 h-4 text-primary" />
// //               <span className="text-sm text-primary">{t.quickNote}</span>
// //             </div>

// //             <div className="grid grid-cols-2 gap-4 mb-6">
// //               <button
// //                 onClick={handleLike}
// //                 className="feedback-btn rounded-2xl p-6 flex flex-col items-center gap-3"
// //               >
// //                 <ThumbsUp className="w-10 h-10 text-primary" />
// //                 {t.great}
// //               </button>

// //               <button
// //                 onClick={() => setFeedbackType("dislike")}
// //                 className="feedback-btn rounded-2xl p-6 flex flex-col items-center gap-3"
// //               >
// //                 <ThumbsDown className="w-10 h-10" />
// //                 {t.couldImprove}
// //               </button>
// //             </div>

// //             <AnimatePresence>
// //               {feedbackType === "dislike" && (
// //                 <motion.div
// //                   initial={{ opacity: 0, height: 0 }}
// //                   animate={{ opacity: 1, height: "auto" }}
// //                   className="border-t pt-6"
// //                 >
// //                   <p className="text-center mb-4">{t.improve}</p>

// //                   <div className="grid grid-cols-2 gap-3 mb-4">
// //                     {t.checkboxes.map((item) => (
// //                       <label
// //                         key={item}
// //                         className="checkbox-item rounded-xl p-3 cursor-pointer"
// //                       >
// //                         <input
// //                           type="checkbox"
// //                           checked={improvements.includes(item)}
// //                           onChange={() =>
// //                             setImprovements((prev) =>
// //                               prev.includes(item)
// //                                 ? prev.filter((i) => i !== item)
// //                                 : [...prev, item]
// //                             )
// //                           }
// //                           className="mr-2"
// //                         />
// //                         {item}
// //                       </label>
// //                     ))}
// //                   </div>

// //                   <textarea
// //                     value={comment}
// //                     onChange={(e) => setComment(e.target.value)}
// //                     className="w-full p-3 rounded-xl border mb-4"
// //                     rows={3}
// //                     placeholder={t.commentPlaceholder}
// //                   />

// //                   <button
// //                     onClick={handleSubmitDislike}
// //                     disabled={isSubmitting}
// //                     className="w-full py-3 rounded-xl submit-btn"
// //                   >
// //                     {isSubmitting ? t.submitting : t.submit}
// //                   </button>
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>

// //             <div className="flex justify-center gap-2 text-sm text-muted-foreground mt-6">
// //               <Lock className="w-4 h-4" />
// //               {t.anonymous} <strong>{t.anonymousBold}</strong>{" "}
// //               {t.anonymousEnd}
// //             </div>
// //           </motion.div>
// //         )}
// //       </AnimatePresence>
// //     </div>
// //   );
// // }
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ThumbsUp,
//   ThumbsDown,
//   Globe,
//   Check,
//   Lock,
//   Sparkles,
// } from "lucide-react";
// import { submitFeedback } from "@/lib/firebase";
// import { toast } from "sonner";

// type Language = "en" | "de";
// type FeedbackType = "like" | "dislike" | null;

// const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/RMon6kBM4EjkUDE28";

// const translations = {
//   en: {
//     title: "How was your experience today?",
//     subtitle: "Your opinion matters — helps us serve you better",
//     quickNote: "Takes less than 20 seconds!",
//     great: "Great",
//     couldImprove: "Could Improve",
//     anonymous: "Your feedback is",
//     anonymousBold: "anonymous",
//     anonymousEnd: "unless you enter contact info",

//     improveTitle: "It seems we could have done better.",
//     improveSubtitle:
//       "We're sorry you weren't fully satisfied with your visit.",
//     improve:
//       "Could you please take a moment to tell us what we could do to improve?",
//     moreDetails: "Any specific feedback or details you'd like to share?",
//     commentPlaceholder: "Share any thoughts here...",
//     submit: "Submit Feedback",
//     submitting: "Submitting...",
//     successTitle: "Thank you for your feedback!",
//     successText:
//       "We truly appreciate you taking the time to share your experience. Your feedback helps us improve and serve you better.",
//     close: "You may now safely close this page.",
//     error: "Please select at least one improvement area",

//     checkboxes: [
//       "Difficulties booking an appointment",
//       "Long waiting time",
//       "Staff friendliness or care",
//       "Quality of treatment",
//       "Billing or payment issues",
//       "Online/digital process",
//     ],
//   },

//   de: {
//     title: "Wie war Ihre Erfahrung heute?",
//     subtitle: "Ihre Meinung zählt — hilft uns, Sie besser zu bedienen",
//     quickNote: "Dauert weniger als 20 Sekunden!",
//     great: "Super",
//     couldImprove: "Verbesserbar",
//     anonymous: "Ihr Feedback ist",
//     anonymousBold: "anonym",
//     anonymousEnd: "sofern Sie keine Kontaktdaten angeben",

//     improveTitle: "Es scheint, wir hätten es besser machen können.",
//     improveSubtitle:
//       "Es tut uns leid, dass Sie nicht ganz zufrieden waren. Möchten Sie uns genaueres Feedback geben?",
  
//   improve:
//     "Könnten Sie sich bitte einen Moment Zeit nehmen, um uns mitzuteilen, was wir verbessern könnten?",
//   moreDetails:
//     "Gibt es spezielles Feedback oder weitere Details, die Sie mit uns teilen möchten?",

//     commentPlaceholder: "Teilen Sie hier Ihre Gedanken...",
//     submit: "Feedback absenden",
//     submitting: "Wird gesendet...",
//     successTitle: "Vielen Dank für Ihr Feedback!",
//     successText:
//       "Vielen Dank, dass Sie sich die Zeit genommen haben. Ihr Feedback hilft uns, besser zu werden.",
//     close: "Sie können diese Seite jetzt schließen.",
//     error: "Bitte wählen Sie mindestens einen Verbesserungsbereich",

//     checkboxes: [
//       "Schwierigkeiten bei der Terminbuchung",
//       "Lange Wartezeit",
//       "Freundlichkeit oder Fürsorge des Personals",
//       "Qualität der Behandlung",
//       "Abrechnungs- oder Zahlungsprobleme",
//       "Online-/digitaler Prozess",
//     ],
//   },
// };

// export default function FeedbackForm() {
//   const [lang, setLang] = useState<Language>(
//     navigator.language.startsWith("de") ? "de" : "en"
//   );
//   const [feedbackType, setFeedbackType] = useState<FeedbackType>(null);
//   const [improvements, setImprovements] = useState<string[]>([]);
//   const [comment, setComment] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showThankYou, setShowThankYou] = useState(false);

//   const t = translations[lang];

//   const toggleImprovement = (item: string) => {
//     setImprovements((prev) =>
//       prev.includes(item)
//         ? prev.filter((i) => i !== item)
//         : [...prev, item]
//     );
//   };

//   const handleLike = async () => {
//     try {
//       await submitFeedback({ reaction: "like", language: lang });
//     } catch {}
//     window.open(GOOGLE_REVIEW_URL, "_blank");
//     setShowThankYou(true);
//   };

//   const handleSubmitDislike = async () => {
//     if (improvements.length === 0) {
//       toast.error(t.error);
//       return;
//     }

//     setIsSubmitting(true);
//     try {
//       await submitFeedback({
//         reaction: "dislike",
//         improvements,
//         comment: comment.trim(),
//         language: lang,
//       });
//       setShowThankYou(true);
//     } catch {
//       toast.error("Something went wrong");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
    
//     <div className="min-h-screen clean-bg flex items-center justify-center p-4">
//       <AnimatePresence mode="wait">
//         {showThankYou ? (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             className="clean-card rounded-2xl p-10 max-w-md w-full text-center"
//           >
//             <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
//               <Check className="w-8 h-8 text-primary" />
//             </div>
//             <h2 className="text-2xl font-semibold mb-4">{t.successTitle}</h2>
//             <p className="text-muted-foreground mb-6">{t.successText}</p>
//             <div className="border-t pt-4 text-sm text-muted-foreground">
//               {t.close}
//             </div>
//           </motion.div>
//         ) : (
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="clean-card rounded-2xl p-8 max-w-lg w-full"
//           >
//             {/* Language */}
//             <div className="flex justify-end mb-4">
//               <button
//                 onClick={() => setLang(lang === "en" ? "de" : "en")}
//                 className="flex items-center gap-2 text-sm text-primary"
//               >
//                 <Globe className="w-4 h-4" />
//                 {lang === "en" ? "DE" : "EN"}
//               </button>
//             </div>

//             <h1 className="text-2xl font-bold text-center mb-2">{t.title}</h1>
//             <p className="text-center text-muted-foreground mb-6">
//               {t.subtitle}
//             </p>

//             <div className="flex justify-center gap-2 mb-6 text-primary text-sm">
//               <Sparkles className="w-4 h-4" />
//               {t.quickNote}
//             </div>

//             <div className="grid grid-cols-2 gap-4 mb-6">
//               <button
//                 onClick={handleLike}
//                 className="feedback-btn rounded-2xl p-6 flex flex-col items-center gap-3"
//               >
//                 <ThumbsUp className="w-10 h-10 text-primary" />
//                 {t.great}
//               </button>

//               <button
//                 onClick={() => setFeedbackType("dislike")}
//                 className={`feedback-btn rounded-2xl p-6 flex flex-col items-center gap-3 ${
//                   feedbackType === "dislike" ? "ring-2 ring-primary" : ""
//                 }`}
//               >
//                 <ThumbsDown className="w-10 h-10 text-primary" />
//                 {t.couldImprove}
//               </button>
//             </div>

//             <AnimatePresence>
//               {feedbackType === "dislike" && (
//                 <motion.div
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   className="border-t pt-6"
//                 >
//                   <h3 className="text-lg font-semibold text-center mb-1">
//                     {t.improveTitle}
//                   </h3>
//                   <p className="text-sm text-muted-foreground text-center mb-5">
//                     {t.improveSubtitle}
//                   </p>
//                 <p className="text-left text-sm font-semibold mb-4">
//                     {t.improve}
//                   </p>
//                   <div className="grid grid-cols-2 gap-3 mb-4">
//                     {t.checkboxes.map((item) => {
//                       const selected = improvements.includes(item);
//                       return (
//                         <div
//                           key={item}
//                           onClick={() => toggleImprovement(item)}
//                           className={`cursor-pointer rounded-xl p-3 border transition ${
//                             selected
//                               ? "bg-primary/10 border-primary"
//                               : "hover:bg-muted"
//                           }`}
//                         >
//                           <div className="flex items-start gap-2 text-sm">
//                             <input
//                               type="checkbox"
//                               checked={selected}
//                               readOnly
//                             />
//                             <span>{item}</span>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                     <p className="text-left text-sm font-semibold mb-2">
//                     {t.moreDetails}
//                   </p>
//                   <textarea
//                     value={comment}
//                     onChange={(e) => setComment(e.target.value)}
//                     className="w-full p-3 rounded-xl border mb-4 text-sm"
//                     rows={3}
//                     placeholder={t.commentPlaceholder}
//                   />

//                   <button
//                     onClick={handleSubmitDislike}
//                     disabled={isSubmitting}
//                     className="w-full py-3 rounded-xl submit-btn"
//                   >
//                     {isSubmitting ? t.submitting : t.submit}
//                   </button>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             <div className="flex justify-center gap-2 text-xs text-muted-foreground mt-6">
//               <Lock className="w-4 h-4" />
//               {t.anonymous} <strong>{t.anonymousBold}</strong>{" "}
//               {t.anonymousEnd}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ThumbsUp,
  ThumbsDown,
  Globe,
  Check,
  Lock,
  Sparkles,
} from "lucide-react";
import { submitFeedback } from "@/lib/firebase";
import { toast } from "sonner";

type Language = "en" | "de";
type FeedbackType = "like" | "dislike" | null;

const GOOGLE_REVIEW_URL = "https://maps.app.goo.gl/RMon6kBM4EjkUDE28";

const translations = {
  en: {
    title: "How was your experience today?",
    subtitle: "Your opinion matters — helps us serve you better",
    quickNote: "Takes less than 20 seconds!",
    great: "Great",
    couldImprove: "Could Improve",
    anonymous: "Your feedback is",
    anonymousBold: "anonymous",
    anonymousEnd: "unless you enter contact info",

    improveTitle: "It seems we could have done better.",
    improveSubtitle:
      "We're sorry you weren't fully satisfied with your visit.",
    improve:
      "Could you please take a moment to tell us what we could do to improve?",
    moreDetails: "Any specific feedback or details you'd like to share?",
    commentPlaceholder: "Share any thoughts here...",
    submit: "Submit Feedback",
    submitting: "Submitting...",
    successTitle: "Thank you for your feedback!",
    successText:
      "We truly appreciate you taking the time to share your experience. Your feedback helps us improve and serve you better.",
    close: "You may now safely close this page.",
    error: "Please select at least one improvement area",

    checkboxes: [
      "Difficulties booking an appointment",
      "Long waiting time",
      "Staff friendliness or care",
      "Quality of treatment",
      "Billing or payment issues",
      "Online/digital process",
    ],
  },

  de: {
    title: "Wie war Ihre Erfahrung heute?",
    subtitle: "Ihre Meinung zählt — hilft uns, Sie besser zu bedienen",
    quickNote: "Dauert weniger als 20 Sekunden!",
    great: "Super",
    couldImprove: "Verbesserbar",
    anonymous: "Ihr Feedback ist",
    anonymousBold: "anonym",
    anonymousEnd: "sofern Sie keine Kontaktdaten angeben",

    improveTitle: "Es scheint, wir hätten es besser machen können.",
    improveSubtitle:
      "Es tut uns leid, dass Sie nicht ganz zufrieden waren. Möchten Sie uns genaueres Feedback geben?",
    improve:
      "Könnten Sie sich bitte einen Moment Zeit nehmen, um uns mitzuteilen, was wir verbessern könnten?",
    moreDetails:
      "Gibt es spezielles Feedback oder weitere Details, die Sie mit uns teilen möchten?",

    commentPlaceholder: "Teilen Sie hier Ihre Gedanken...",
    submit: "Feedback absenden",
    submitting: "Wird gesendet...",
    successTitle: "Vielen Dank für Ihr Feedback!",
    successText:
      "Vielen Dank, dass Sie sich die Zeit genommen haben. Ihr Feedback hilft uns, besser zu werden.",
    close: "Sie können diese Seite jetzt schließen.",
    error: "Bitte wählen Sie mindestens einen Verbesserungsbereich",

    checkboxes: [
      "Schwierigkeiten bei der Terminbuchung",
      "Lange Wartezeit",
      "Freundlichkeit oder Fürsorge des Personals",
      "Qualität der Behandlung",
      "Abrechnungs- oder Zahlungsprobleme",
      "Online-/digitaler Prozess",
    ],
  },
};

export default function FeedbackForm() {
  const [lang, setLang] = useState<Language>(
    navigator.language.startsWith("de") ? "de" : "en"
  );
  const [feedbackType, setFeedbackType] = useState<FeedbackType>(null);
  const [improvements, setImprovements] = useState<string[]>([]);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const t = translations[lang];

  const toggleImprovement = (item: string) => {
    setImprovements((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const handleLike = async () => {
    try {
      await submitFeedback({ reaction: "like", language: lang });
    } catch {}
    window.open(GOOGLE_REVIEW_URL, "_blank");
    setShowThankYou(true);
  };

  const handleSubmitDislike = async () => {
    if (improvements.length === 0) {
      toast.error(t.error);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitFeedback({
        reaction: "dislike",
        improvements,
        comment: comment.trim(),
        language: lang,
      });
      setShowThankYou(true);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/clinic.png')",
        }}
      />

      {/* Dark Overlay (NO BLUR) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full">
        <AnimatePresence mode="wait">
          {showThankYou ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="clean-card rounded-3xl p-12 max-w-xl w-full text-center mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">{t.successTitle}</h2>
              <p className="text-muted-foreground mb-6">{t.successText}</p>
              <div className="border-t pt-4 text-sm text-muted-foreground">
                {t.close}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="clean-card rounded-2xl p-10 max-w-xl w-full mx-auto"
            >
              <div className="flex justify-end mb-4">
                <button
                  onClick={() => setLang(lang === "en" ? "de" : "en")}
                  className="flex items-center gap-2 text-sm text-primary"
                >
                  <Globe className="w-4 h-4" />
                  {lang === "en" ? "DE" : "EN"}
                </button>
              </div>

              <h1 className="text-2xl font-bold text-center mb-2">{t.title}</h1>
              <p className="text-center text-muted-foreground mb-6">
                {t.subtitle}
              </p>

              <div className="flex justify-center gap-2 mb-6 text-primary text-sm">
                <Sparkles className="w-4 h-4" />
                {t.quickNote}
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  onClick={handleLike}
                  className="feedback-btn rounded-2xl p-6 flex flex-col items-center gap-3"
                >
                  <ThumbsUp className="w-10 h-10 text-primary" />
                  {t.great}
                </button>

                <button
                  onClick={() => setFeedbackType("dislike")}
                  className={`feedback-btn rounded-2xl p-6 flex flex-col items-center gap-3 ${
                    feedbackType === "dislike" ? "ring-2 ring-primary" : ""
                  }`}
                >
                  <ThumbsDown className="w-10 h-10 text-primary" />
                  {t.couldImprove}
                </button>
              </div>

              <AnimatePresence>
                {feedbackType === "dislike" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="border-t pt-6"
                  >
                    <h3 className="text-lg font-semibold text-center mb-1">
                      {t.improveTitle}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center mb-5">
                      {t.improveSubtitle}
                    </p>

                    <p className="text-left text-sm font-semibold mb-4">
                      {t.improve}
                    </p>

                    {/* <div className="grid grid-cols-2 gap-3 mb-4">
                      {t.checkboxes.map((item) => {
                        const selected = improvements.includes(item);
                        return (
                          <div
                            key={item}
                            onClick={() => toggleImprovement(item)}
                            className={`cursor-pointer rounded-xl p-3 border transition ${
                              selected
                                ? "bg-primary/10 border-primary"
                                : "hover:bg-muted"
                            }`}
                          >
                            <div className="flex items-start gap-2 text-sm">
                              <input type="checkbox" checked={selected} readOnly />
                              <span>{item}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
  {t.checkboxes.map((item) => {
    const selected = improvements.includes(item);

    return (
      <label
        key={item}
        onClick={() => toggleImprovement(item)}
        className={`
          flex items-center gap-3
          cursor-pointer
          rounded-xl
          border
          p-4
          text-sm
          transition
          ${
            selected
              ? "bg-primary/10 border-primary"
              : "hover:bg-muted border-border"
          }
        `}
      >
        <input
          type="checkbox"
          checked={selected}
          readOnly
          className="h-4 w-4 shrink-0 accent-primary"
        />

        <span className="flex-1">
          {item}
        </span>
      </label>
    );
  })}
</div>


                    <p className="text-left text-sm font-semibold mb-2">
                      {t.moreDetails}
                    </p>

                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full p-3 rounded-xl border mb-4 text-sm"
                      rows={3}
                      placeholder={t.commentPlaceholder}
                    />

                    <button
                      onClick={handleSubmitDislike}
                      disabled={isSubmitting}
                      className="w-full py-3 rounded-xl submit-btn"
                    >
                      {isSubmitting ? t.submitting : t.submit}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-center gap-2 text-xs text-muted-foreground mt-6">
                <Lock className="w-4 h-4" />
                {t.anonymous} <strong>{t.anonymousBold}</strong>{" "}
                {t.anonymousEnd}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}



