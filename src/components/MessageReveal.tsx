import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import envelopeClosed from '@/assets/envelope-closed.png';
import envelopeOpen from '@/assets/envelope-open.png';

export const MessageReveal = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
    setTimeout(() => setShowHearts(true), 800);
  };

  const loveLetterText = `My Dearest Baeby,

On 19th September 2022, Everything started apna baat krna college me milna ghumna phirna and all and dekhte hi dekhte now we have tons of memory. And It's been 4 YEARS. 

Thank you for being there with me always, I dreamed that ke we'll be forever together. But Yeah whatever is there will end this month as you said to meet me before September end. I wish woh yehi month me end hojaye. 

I loved you, I love you & I'll always love you but now i realised there's no future together. 

You are my forever and I really look forward to make this 3 years to 30 years to 300 years & to keep it till eternity. This is the msg i said last year but I couldn't protect it this whole year only. I'm very ashamed. 

Namrah, this is very important day for me, For my whole life. I got you on this date. And aaj sunday h toh possible ni but I wish this thing to end this month only. So tum toh abhi agree kre ho lunch ke liye, but namrah meko pure yeh 4 saal ko round off krna hai. Yeh 4 saal namrah bahot zyada hota h. 

Remember woh meet, ramzan se pehle wala tumhara birthday celebration ka mujhe ek aisa last meet chahiye. I want spent time together. Ik what you're saying everytime to and why it's not mentally possible for you. You don't want but you're still ready to meet for me, right? So, please sab cheezein bhulkr for a day kya apun ni mil skte? just to end everything together for once and all. 

Idk namrah ke tum kabhi manoge bhi ya ni, ya ho skta h aaj yeh msg dekh kr phir se tum hamesha hamesha ke liye mujhe chodne ki baat krdo. Me phirse promise krlunga. tum phirse churi utha loge me phirse shaan hojaunga. tum phirse uncle ka bolenge me phirse shaant hojaunga. But kab tak namrah. Even you don't want ke yeh iss tarah end hou and not me. I just want everything to be end happily. 

I'm promising you that this is our end meet. I don't want to say anything forever wala and it can't be yeh last meet ke baad even i see you with any other boy also I'll never reach out to you friends toh dur ka baat. Ek sharing rickshaw me bhi honge toh i won't look at you. This meet will end everything. Mere dil ko bas ek aakhri baar mere hisab se tumhare saath jeena hai. and yeh sab usi ke liye hai. 

After that meet, I'm promising you. If tum bolenge to block you on chats. I'll do. You want me to block your family members from my insta id I'll do it. Meko tumhare friends ke number ni yaad h toh tum unke delete krwa skte ho mere phone se. I'll delete all of your belongings. This is my promise. Even I'm also very frustrated thinking bout you whole day. Me sahi me sirf tumhe pagalon ke tarah whatsapp pr msg krta hu block hu toh bhi one sided.

Yeh pagal pan khatam krna h bas. Tumne already lunch ke liye agree krliye ho bas ab mujhse milne ke liye bhi krlo... yeh msg wala part bas isiliye bol rha hu ke me shyd lunch ko ha krdu in future dates aane pr toh jab usdin milenge toh just remember ke woh apna last meet hai. Uske baad we'll never meet again forever. 

And that's sit from my side, Aaj tumne haa bole mujhe lunch ke liye toh I got excited and yeh same website me changes krne laga hu new section add kr rha hu. this much i love you. this much hope i get from the single msg of yours. So, i just hope ab tum aage jaakar mana na kro. It's my request. My final request is to give me the last day to live my life.

I love you my baeby. Happy Anniversary! 💖

Mera gudiya, Meri baeby.
Happy Anniversary! 💕`;

  return (
    <div className="relative flex flex-col items-center">
      {/* <div className="relative mb-8">
        <img
          src={isRevealed ? envelopeOpen : envelopeClosed}
          alt={isRevealed ? "Open envelope" : "Closed envelope"}
          className={`w-64 md:w-80 transition-all duration-800 ${
            isRevealed ? 'animate-scale-in' : 'animate-float'
          }`}
        />
        
        {showHearts && (
          <>
            {[...Array(6)].map((_, i) => (
              <Heart
                key={i}
                className="absolute text-primary animate-heart-float"
                style={{
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.3}s`,
                  fontSize: `${16 + Math.random() * 8}px`,
                }}
                fill="currentColor"
              />
            ))}
          </>
        )}
      </div> */}

      {!isRevealed && (
        <Button
          onClick={handleReveal}
          className="bg-gradient-love hover:shadow-floating transition-all duration-300 transform hover:scale-105 text-white font-serif text-lg px-8 py-3 rounded-full"
        >
          Reveal Surprise 💌
        </Button>
      )}

      {isRevealed && (
        <div className="animate-fade-in-up bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-romantic max-w-2xl mx-4">
          <div className="font-serif text-card-foreground leading-relaxed whitespace-pre-line text-center md:text-left">
            {loveLetterText}
          </div>
        </div>
      )}
    </div>
  );
};