import type { Chapter } from './types';
import { photo } from './media';

/**
 * The story, chapter by chapter, in reading order.
 *
 * Page kinds: text · image · image-text · two-image · gallery · quote · date ·
 *             timeline · letter · milestone · list · pause · screen · video · final
 */

export const chapters: Chapter[] = [
  {
    id: 'before-you',
    number: 1,
    title: 'Before You',
    description: 'Who I was, before you came into my life.',
    opening: { variant: 'classic' },
    pages: [
      {
        kind: 'text',
        paragraphs: [
          `Before you came into my life, everything felt... normal.`,
          `And honestly, a little boring too.`,
          `My life was basically just:`,
          `**career.**`,
          `Make a lot of money.\nDo something really good with my life.\nBuild a great career.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And then there were my four friends, college, masti, random plans, and the usual everyday engineering life.`,
          `That's it.`,
          `I was living, but I don't think I was really expecting anything extraordinary from life.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And somewhere in between all of that, I started noticing something.`,
          `Almost all my friends had someone.`,
          `They would go out with their girlfriends, make plans, spend time together...`,
          `And I'd be there thinking,`,
        ],
      },
      { kind: 'quote', quote: `Yaar, main kyun reh gaya?` },
      {
        kind: 'text',
        paragraphs: [
          `It wasn't that I wasn't happy for them.`,
          `I was.`,
          `But somewhere inside, I really wanted that too.`,
          `I wanted my person.`,
          `Someone I could call mine.\nSomeone I could love.\nSomeone who would make all those ordinary days feel a little less ordinary.`,
          `I used to wonder...`,
        ],
      },
      { kind: 'quote', quote: `Kya mujhe bhi kabhi meri life mein pyaar milega?` },
      {
        kind: 'text',
        paragraphs: [
          `Maybe God wasn't listening.`,
          `Because first year mein mera dil toot gaya.`,
          `And after that...`,
          `I think something inside me just changed.`,
          `I became a little more like a stone.`,
          `I stopped expecting love.\nI stopped believing that maybe it would happen for me.`,
          `And eventually, I just decided:`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `**Fine.**`,
          `If love isn't meant for me, then I'll focus on everything else.`,
          `I'll make money.\nI'll build my career.\nI'll become successful.`,
          `And I did.`,
          `I started living my life without really expecting my heart to be a part of it.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `At one point, I genuinely thought I was probably one of the unluckiest people when it came to love.`,
          `That maybe some people get their person...`,
          `and maybe some people don't.`,
          `I thought I was one of the people who wouldn't.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `So that's who I was before you.`,
          `A guy who had plans for his future.\nA guy who wanted to do something big.\nA guy who had friends, college, dreams and a career to build.`,
          `But somewhere inside...`,
          `a guy who had quietly stopped expecting to find his person.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'And then came final year',
        paragraphs: [
          `Years kept passing.`,
          `First year became second.\nSecond became third.`,
          `And slowly, engineering started coming to an end.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And then somehow...`,
          `I reached **final year.**`,
          `My last year of engineering.`,
          `And I had absolutely no idea that this would become the most special year of all.`,
          `Because somewhere in this final year...`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `**I found you.**`,
          `The person I had spent so long thinking I might never find.`,
          `And that's probably the funniest thing about life.`,
          `I spent so much time thinking:`,
          `**“Maybe love just isn't for me.”**`,
          `And then, when I had almost stopped looking for it...`,
          `**you came into my life.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And suddenly, final year wasn't just the year I was going to finish engineering.`,
          `It became the year that gave me something I never thought I'd have.`,
          `**You.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And now, with every passing day, this year keeps becoming more and more special.`,
          `Because when I look back at what I thought my final year would be...`,
          `I never imagined that the best part of it would be **us.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And this...`, `**is where our 50 days begin.**`],
      },
    ],
  },
  {
    id: 'random-hi',
    number: 2,
    title: 'It Started With a Random Hi',
    description: 'One random LinkedIn message.',
    opening: { variant: 'numeral' },
    pages: [
      {
        kind: 'text',
        paragraphs: [
          `I still remember that day.`,
          `It was sometime in **August**. I don't remember the exact date anymore, but I do remember that it was the **last week of August**.`,
          `And honestly, there was nothing special about that day.`,
          `I was just living my usual life.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Internship work.\nOffice work.\nManager ki tension.\nProjects.\nDeadlines.\nThe same routine.`,
          `Nothing new.\nNothing exciting.`,
          `Just another normal, slightly boring day that I was trying to get through.`,
          `I was already getting pretty fucked up with that same repetitive schedule.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And then, for absolutely no particular reason, I opened LinkedIn.`,
          `And there you were.`,
          `**Your profile.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `I don't know what exactly made me message you that day.`,
          `Maybe it was just a random thought.`,
          `Maybe it was timing.`,
          `Maybe it was one of those little decisions we make without realizing that they are about to change something much bigger.`,
          `Whatever it was...`,
          `I just sent you a simple:`,
        ],
      },
      { kind: 'quote', quote: `Hi.` },
      {
        kind: 'text',
        paragraphs: [
          `That's it.`,
          `One tiny LinkedIn message.`,
          `Nothing dramatic.\nNothing planned.`,
          `Just a random **hi**.`,
          `There's this beautiful idea that sometimes the biggest chapters of our lives begin with the smallest, most ordinary moments.`,
          `And I think that's exactly what happened with us.`,
        ],
      },
      {
        kind: 'quote',
        quote: `I didn't know that the most random ‘hi’ of my life would become the beginning of my favourite story.`,
      },
      {
        kind: 'text',
        paragraphs: [
          `And then...`,
          `**you replied.**`,
          `And honestly, I'm still glad you did.`,
          `Because from that one reply, something started.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'Day One',
        paragraphs: [
          `Our first conversation wasn't anything crazy.`,
          `It was actually pretty normal.`,
          `We talked about college.\nWhich department.\nWhich course.\nPlacements.\nHow things were going.`,
          `The usual stuff two people who barely know each other would talk about.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `But somehow...`,
          `the conversation didn't feel forced.`,
          `We just kept talking.`,
          `And then, somewhere between those normal questions and random conversations, something changed.`,
          `We started talking about things that were a little more personal.\nThen a little more personal.`,
          `And slowly...`,
          `we started sharing things that we usually don't just tell anyone.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `I don't even know exactly when it happened.`,
          `There wasn't a particular moment where we suddenly became close.`,
          `It just...`,
          `**happened.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Conversation after conversation.\nText after text.`,
          `And somehow, even on that very first day, it felt like we were beginning to understand each other.`,
          `Like our vibes just...`,
          `**matched.**`,
          `It was strange in the best possible way.`,
          `Because we had only just started talking, yet it didn't feel like I was talking to a complete stranger anymore.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `It felt easy.\nIt felt comfortable.\nIt felt like I wanted to know more.`,
          `And the more we talked...`,
          `the more I wanted to know **you.**`,
          `Your likes.\nYour dislikes.\nYour favourite things.\nYour life.\nYour stories.\nThe little things about you.`,
          `Everything.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'From LinkedIn to Something More',
        paragraphs: [
          `Then came those little moments that I still remember.`,
          `That tiny bit of flirting over text.`,
          `You asking for my number.\nMe giving it to you.`,
          `And honestly...`,
          `the happiness I felt when you actually wanted my number was kind of cute. 😂`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Slowly, our conversations moved from LinkedIn to somewhere a little more personal.`,
          `And suddenly, talking to you became one of my favourite parts of the day.`,
          `I wanted to know more about you.`,
          `Not because I had some plan.\nNot because I knew where any of this was going.`,
          `I just genuinely enjoyed knowing you.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Every conversation felt like I was discovering another little part of you.`,
          `And there was something addictive about that feeling.`,
          `Like...`,
        ],
      },
      { kind: 'quote', quote: `Bas aur thoda jaan leta hoon is ladki ko.` },
      {
        kind: 'text',
        paragraphs: [
          `And then another conversation.\nAnd then another.`,
          `And before I even realized it...`,
          `you were becoming someone I genuinely looked forward to talking to.`,
          `Someone I was getting comfortable with.\nSomeone I was getting close to.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And maybe that's what made those first conversations so special.`,
          `We weren't trying to create a relationship.\nWe weren't trying to force anything.`,
          `We were simply...`,
          `**getting to know each other.**`,
          `And somehow, that was enough.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'The Decision to Meet',
        paragraphs: [
          `Eventually, all those conversations led to the obvious next step.`,
          `**Meeting each other in college.**`,
          `After knowing each other through messages, after all those conversations, after learning all those little things about each other...`,
          `we finally decided that we should actually meet.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And I still remember how exciting that felt.`,
          `Because suddenly, the person I had been talking to through a screen...`,
          `was going to be standing in front of me.`,
          `The person whose likes I was slowly learning.\nThe person whose life I was slowly becoming curious about.\nThe person I had started looking forward to talking to every day.`,
          `**You.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And neither of us knew it yet...`,
          `but that first random LinkedIn “hi” was slowly turning into something much bigger.`,
          `Something that would become **us.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And maybe that's the most beautiful thing about our beginning.`,
          `There was no grand plan.\nNo perfect timing.\nNo dramatic first meeting.`,
          `Just one completely normal day...\none random LinkedIn profile...\none simple **“hi”**...\nand one girl who decided to reply.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And somehow...`, `**that was enough to change my year.**`],
      },
    ],
  },
  {
    id: 'finally-met-you',
    number: 3,
    title: 'The Day I Finally Met You',
    description: 'The stairs, the library, and a blue top.',
    opening: { variant: 'margin' },
    pages: [
      {
        kind: 'text',
        paragraphs: [
          `This is where things started getting **really interesting.**`,
          `Because after all those conversations...\nafter knowing each other through messages...\nafter wondering what it would actually be like to meet you...`,
          `**the day finally came.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And I still remember how excited I was to go to college that day.`,
          `I had been going to the same college for years.`,
          `But that day?`,
          `It felt completely different.`,
          `For the first time in all these years, I was actually **excited** to go to college.`,
          `And I was genuinely happy.`,
          `I remember telling all my friends, with the biggest smile on my face,`,
        ],
      },
      { kind: 'quote', quote: `Aaj main ek ladki se milunga college mein. 😂` },
      {
        kind: 'text',
        paragraphs: [
          `I was way too excited.`,
          `And then came those messages on LinkedIn.`,
          `You messaging me that you had reached college.\nMe asking you where you were.\nMe telling you to come over so we could meet.`,
          `And then...`,
          `**I went to your department to get you.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Aye hayee.`,
          `Even writing this now gives me butterflies.`,
          `Because somehow, even though it happened only once...`,
          `it still feels like it happened **yesterday.**`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'The Stairs',
        paragraphs: [
          `We met on the stairs of your department.`,
          `And the moment I saw you...`,
          `I was genuinely shocked.`,
          `Not in a bad way.`,
          `More like...`,
          `**“Wait... this is actually her.”**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `After seeing your profile, talking to you every day, knowing you through messages...`,
          `there you suddenly were.`,
          `Right in front of me.`,
          `And then came our first handshake.`,
          `Something as simple as a handshake.`,
          `But I still remember it.`,
          `Funny how the smallest moments can become the ones you remember forever.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `I still remember going to bring you out of your department too.`,
          `The guard uncle wasn't letting you come outside.`,
          `And then when I finally came out...`,
          `**you came outside with me.**`,
          `And somehow, that tiny moment felt so special.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `But then...`,
          `you did something that I absolutely wasn't prepared for.`,
          `You remembered that I had told you my favourite colour was **blue.**`,
          `And you came wearing a **blue top.**`,
          `Bro...`,
          `I was finished. 😭`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `I don't know whether you intentionally chose it or whether it was just a coincidence...`,
          `but at that moment, I was completely gone.`,
          `I was already nervous.\nAlready excited.`,
          `And then you showed up wearing my favourite colour.`,
          `**How was I supposed to survive that?**`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'The First Time I Saw You',
        paragraphs: [
          `And then I actually looked at you properly.`,
          `For the first time.`,
          `Not through a screen.\nNot through pictures.`,
          `**You.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And honestly...`, `I fell for you a little right there.`, `My first thought was basically:`],
      },
      { kind: 'quote', quote: `Bhai... itni sundar ladki.` },
      {
        kind: 'text',
        paragraphs: [
          `I was nervous.\nI was excited.`,
          `I didn't really know what to say or where to look.`,
          `Because suddenly the girl I had been talking to was sitting right in front of me...`,
          `and somehow, she was even more beautiful in person.`,
          `So I took you towards my department.`,
          `And then we went to the library.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'The Library',
        paragraphs: [
          `We sat together.`,
          `And honestly...`,
          `I don't even know how much I actually listened to you that day.`,
          `Because I kept looking at you.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Your eyes.\nYour hair.\nYour smile.\nThose dimples.\nThe way you talked.\nThe little expressions on your face.`,
          `I just wanted to keep listening.\nKeep looking.\nKeep knowing you.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `It felt like I had entered some completely different little world.`,
          `Everything around me was still happening.\nCollege was still there.\nPeople were still there.`,
          `But somehow...`,
          `I wasn't really there anymore.`,
          `It felt like it was just **you and me.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And honestly?`, `It felt like heaven.`, `That day was just...`, `**too good.**`],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'Little Things I Still Remember',
        paragraphs: [
          `You showed me your entire gallery.`,
          `Which, by the way, was basically an entire tour of your life. 😂`,
          `And then there was that moment when you were trying to unlock your phone...`,
          `and your fingerprint wasn't cooperating.`,
          `So you had to use your fingerprint again.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And somehow, even these completely random little moments are still sitting somewhere in my memory.`,
          `We talked.\nA lot.`,
          `I complimented you.\nYou blushed.`,
          `And I don't know why...`,
          `but seeing you blush after I complimented you was one of my favourite things that day.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Maybe because it made everything feel a little more real.`,
          `The girl I had been talking to online...\nthe girl whose messages I had started looking forward to...`,
          `was now sitting right beside me.`,
          `Blushing because of something **I** said.`,
          `And I loved it.`,
          `I loved every little thing about that day.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'And Then Came the Twist',
        paragraphs: [
          `Of course...`,
          `our first day couldn't just be perfect from beginning to end. 😂`,
          `There had to be a little plot twist.`,
          `You were stressed about something.`,
          `We eventually went outside the library.`,
          `And that's when I met **Lucky** for the first time.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `I'll be honest...`,
          `my first thought was basically:`,
          `**“Who is this guy?”** 😂`,
          `The situation was different back then, and I didn't really understand everything.`,
          `But then something happened that I still remember.`,
          `**You took my stand.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And for the first time...`,
          `I felt like someone was actually standing beside me.`,
          `Someone was on my side.\nSomeone had my back.`,
          `And that feeling...`,
          `I don't think I'll ever forget it.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because it wasn't some huge dramatic gesture.`,
          `It was just a moment.`,
          `But for me, it meant something.`,
          `It was one of those little moments that quietly tells you:`,
          `**“Maybe this person really cares.”**`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'The Moment I Thought I Lost You',
        paragraphs: [
          `Eventually, college was over for the day.`,
          `I went home.`,
          `And I remember standing at the metro station.`,
          `The day was over.`,
          `I had finally met you.\nI had spent time with you.`,
          `I was probably still replaying everything that happened in my head.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And then...`, `I opened LinkedIn.`, `And there it was.`, `**I was blocked.**`],
      },
      {
        kind: 'text',
        paragraphs: [
          `My heart sank.`,
          `Just like that.`,
          `For a moment, I genuinely thought...`,
          `**“Shit. I lost her.”**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `After everything that had happened.\nAfter all those conversations.\nAfter finally meeting you.`,
          `I thought maybe that was it.`,
          `Maybe our story had ended before it had even properly started.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `But somewhere inside me...`,
          `there was still this strange little feeling.`,
          `A voice telling me:`,
          `**“She'll come back.”**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `I don't know why I felt that.`,
          `Maybe because by then, whatever bond we had created in those few days already felt different.`,
          `We hadn't known each other for years.\nWe hadn't been together for months.`,
          `It had barely even started.`,
          `But somehow...`,
          `there was already something there.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Something strong enough to make me believe that this wasn't the end.`,
          `That somehow...`,
          `**you would come back.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And maybe that feeling was right.`,
          `Because what I thought was the end...`,
          `was actually just the beginning.`,
          `The beginning of something that would become **us.**`,
          `The beginning of our real story.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And that's why, when I look back at that day now...`,
          `I don't remember it as the day I thought I lost you.`,
          `I remember it as the day...`,
          `**I finally met you.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And maybe...`, `**the day I first started falling for you.**`],
      },
    ],
  },
  {
    id: 'journey-begins',
    number: 4,
    title: 'The Actual Journey Begins',
    description: '2 September — the day it got a name.',
    opening: { variant: 'classic' },
    pages: [
      {
        kind: 'text',
        paragraphs: [
          `Who knew that on that day...\nI would actually think that I had lost you?`,
          `After everything that had happened, I went home with this strange heaviness in my heart.`,
          `I felt sad.\nI felt guilty.\nI kept thinking about everything.`,
          `And somewhere inside, I just kept asking God:`,
          `**“Why?”**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Why did this happen?`,
          `Why did I have to lose you just when I had started getting so attached to you?`,
          `Because by then, I had realized something.`,
          `I didn't want to lose you.`,
          `I had started loving you.`,
          `And maybe I hadn't even completely admitted that to myself yet...`,
          `but my heart already knew.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`I remember thinking:`, `**“God, please... I really don't want to lose her.”**`],
      },
      {
        kind: 'text',
        paragraphs: [
          `At that point, I genuinely felt like you were gone.`,
          `Like whatever had started between us was over before it had even properly begun.`,
          `But there was still this tiny voice somewhere inside me.`,
          `A feeling I couldn't explain.`,
          `Something that kept saying:`,
          `**“She'll come back.”**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And then...`, `**my phone rang.**`],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'Your Call',
        paragraphs: [
          `It was you.`,
          `You called me.`,
          `And I still remember your words.`,
          `You were saying sorry.`,
          `You felt bad that because of you, I had been put through all this trouble.`,
          `And I remember telling you:`,
          `**“You didn't do anything wrong. Don't take tension.”**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Just hearing your voice again changed my entire mood.`,
          `I was on my way home in the metro, and honestly...`,
          `I felt so good.`,
          `Not because everything had suddenly become perfect.`,
          `But because **you had called me.**`,
          `You had called to ask about me.\nYou cared enough to reach out.`,
          `And somehow, that felt incredibly special.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `That entire metro ride, there was this feeling inside me that I couldn't shake.`,
          `The same feeling.\nThe same little voice.`,
          `**You were coming back into my life.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And maybe I was right.`,
          `Because when I reached home, I was just sitting there looking at my phone.`,
          `And then, that evening...`,
          `**you called again.**`,
          `Just to talk.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And I don't think you realize how much that meant to me.`,
          `Because after thinking that I had lost you...`,
          `I was suddenly talking to you again.`,
          `Maybe that was the moment I realized that whatever this was between us...`,
          `it wasn't that easy to break.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'Finding Our Way Back',
        paragraphs: [
          `Of course, our story couldn't make things easy for us. 😂`,
          `Somehow, we kept finding ourselves in situations where we had to figure out another way to talk.`,
          `At one point, I suggested:`,
        ],
      },
      { kind: 'quote', quote: `Telegram pe baat karte hain.` },
      {
        kind: 'text',
        paragraphs: [
          `And you did.\nYou came to Telegram.`,
          `But then Lucky saw the messages.`,
          `And suddenly...`,
          `**another block.**`,
          `At this point, our story was starting to feel like a full-time job just to find an app where we could talk. 😭`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Then WhatsApp happened.`,
          `You removed your WhatsApp access from your phone, and somehow we ended up talking there again.`,
          `And I still remember those conversations.`,
          `We were talking about meeting again.`,
          `You were telling me to come to college early so that we could meet in the morning.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `We were just trying to figure things out.\nTrying to find some solution.`,
          `And somehow...`,
          `**we always did.**`,
          `No matter how complicated things became...`,
          `we somehow kept finding our way back to each other.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Eventually, I gave you my Instagram ID.`,
          `You logged into my account through Chrome, and finally...`,
          `everything became a little easier.`,
          `We started talking on Instagram.`,
          `And honestly?`,
          `That became one of my favourite parts of this whole beginning.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because now we could just talk.\nReally talk.`,
          `We were getting to know each other more and more.`,
          `And without realizing it...`,
          `we were becoming closer.`,
          `But neither of us knew yet that the biggest moment was still waiting for us.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'date',
        day: '02',
        month: 'September',
        heading: 'The Day Everything Changed',
        paragraphs: [`I will never forget that date.`, `Because that was the day our story changed forever.`],
      },
      {
        kind: 'text',
        paragraphs: [
          `It was just another normal conversation on Instagram.`,
          `We were talking like we normally did.`,
          `Nothing felt particularly different.`,
          `It was natural.\nEasy.\nJust us talking.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And then suddenly...`,
          `you said:`,
          `**“I want to say something.”**`,
          `And I had absolutely no idea what was coming next.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`Then...`, `you confessed.`],
      },
      {
        kind: 'screen',
        image: photo('ch04/proposal-1.jpg', 'Her message on Instagram: “I don’t really know how to say this without getting shy… you became someone really special to me… Will you be mine forever?”', { width: 720, height: 812 }),
        date: '2 September',
      },
      {
        kind: 'text',
        paragraphs: [
          `And I swear...`,
          `I was shocked.`,
          `Like...`,
          `**wait.**`,
          `**What is actually happening?**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `I couldn't even believe it.`,
          `I was so surprised that the first thing I asked you was basically:`,
          `**“Are you proposing to me?”** 😂`,
          `I mean...\nwho actually asks that?`,
          `But I genuinely couldn't believe what I was hearing.`,
        ],
      },
      {
        kind: 'screen',
        image: photo('ch04/proposal-2.jpg', 'My reply: “Are you asking for what? Yes i love to be your forever” … “Obviously miss I will love too, are you proposing me”', { width: 720, height: 1047 }),
      },
      {
        kind: 'text',
        paragraphs: [`And then you said it.`, `**“Yes. I'm proposing to you.”**`],
      },
      {
        kind: 'screen',
        image: photo('ch04/proposal-3.jpg', 'Her reply: “Yupp” … “And yess I’m proposing u” — and mine: “So u are mine”, “Mine girl”', { width: 720, height: 1065 }),
      },
      {
        kind: 'text',
        paragraphs: [`And that's it.`, `Right there...`, `everything changed.`],
      },
      {
        kind: 'text',
        paragraphs: [
          `The girl I had randomly messaged on LinkedIn.\nThe girl I had started talking to without knowing where it would go.\nThe girl I had met in the library.\nThe girl I thought I had lost.\nThe girl I somehow kept finding my way back to...`,
          `was now telling me that she wanted **me.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And suddenly, all those random conversations didn't feel random anymore.`,
          `That random LinkedIn “hi” didn't feel random anymore.`,
          `That first meeting didn't feel random anymore.`,
          `All those calls.\nAll those messages.\nAll those crazy attempts to find a way to keep talking.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `They had all led us here.`,
          `To **2 September.**`,
          `To the moment where we finally stopped being two people who were just getting to know each other...`,
          `and became something more.`,
          `**Us.**`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: `And That's Where It Really Began`,
        paragraphs: [
          `People might think our story began with that first LinkedIn message.`,
          `Maybe it did.`,
          `Maybe it began when we first met in college.`,
          `Maybe it began with that first conversation.`,
          `But for me...`,
          `our actual journey began on **2 September.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because that's the day we became **a relationship.**`,
          `That's the day you chose me.`,
          `And that's the day I realized that the girl I had once thought I had lost...`,
          `was actually becoming **my person.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `So yes...`,
          `the random “hi” started the story.`,
          `The first meeting gave it a face.`,
          `But **2 September gave it a name.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And from that day...`, `**our actual journey began.**`],
      },
    ],
  },
  {
    id: 'time-together',
    number: 5,
    title: 'The Time We Spent Together',
    description: 'Fifty days of us.',
    opening: { variant: 'numeral' },
    pages: [
      {
        kind: 'text',
        paragraphs: [
          `So...`,
          `**this is going to be a long one.**`,
          `Because fifty days is not a small amount of time.`,
          `And if we've already made four chapters out of how we found each other...`,
          `then I think we deserve at least one whole chapter for the time we actually **lived together.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `So yes, my bby...`,
          `I'm ready to go back through all of it.`,
          `Every day.\nEvery little moment.\nEvery smile.\nEvery fight.\nEvery wait.\nEvery call.\nEvery time we missed each other.\nEvery time we found our way back to each other.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because our relationship hasn't been perfect.`,
          `And honestly...`,
          `I don't want to pretend that it was.`,
          `We've had struggles.\nWe've had fights.\nWe've had moments where we missed each other so badly.\nWe've had days where things felt difficult.\nWe've had moments where one of us wasn't sure what would happen next.`,
          `We've had moments where it genuinely felt like:`,
        ],
      },
      { kind: 'quote', quote: `Bas, ab sab khatam ho gaya.` },
      {
        kind: 'text',
        paragraphs: [
          `But somehow...`,
          `every single time...`,
          `we found a way back.`,
          `And that's what makes these fifty days ours.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because along with all the beautiful moments...`,
          `there was effort.\nThere was understanding.\nThere was patience.\nThere was trust.\nThere was craving to see each other.\nThere was the feeling of missing each other.\nThere was the constant desire to just be together.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And somewhere between all of that...`, `**we became us.**`, `For me, everything felt like magic, bby.`],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'The Little Moments That Became Everything',
        paragraphs: [
          `I don't think I'll ever be able to remember these fifty days as just fifty days.`,
          `Because every few days gave me another memory.`,
          `Another little moment that somehow stayed.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Like the day you came to meet me near **Krishna Hall wearing that green kurti.**`,
          `Or the first time I hugged you.`,
          `I still remember that feeling.`,
          `It wasn't just a hug.`,
          `It was the first time I could actually hold the person I had become so attached to.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And then there were the smaller things too.`,
          `The first time we got moody with each other.\nThe first time we had our video call.\nThe first time you held my hand in the library.\nThe times we prepared together for your college presentation.\nThose late-night conversations where we just kept talking.`,
          `The kind of conversations where you don't even realize how late it has become because you don't want to stop talking.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Then there was the keychain you gave me.\nThe tiffin box you brought for me.\nMy first chocolate for you.\nAnd then us sitting together and eating chocolate.`,
          `Aye hayee.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `These things sound so small when I write them down.`,
          `But that's the thing about us.`,
          `**The small things never felt small.**`,
          `They became memories.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'Our Little World',
        paragraphs: [
          `There were our library dates.`,
          `There were all those moments where we'd sit together and somehow forget about everything else.`,
          `There were the texts.\nSo many texts.`,
          `The flirting.\nThe compliments.\nThe random ways we would find to talk to each other.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And then came our extremely important discoveries. 😂`,
          `Like figuring out that we could even do video calls on **Google Meet.**`,
          `Because apparently, when two people want to talk badly enough...`,
          `they will find every possible application on the internet. 😭`,
        ],
      },
      {
        kind: 'gallery',
        photos: [
          { image: photo('ch05/google-meet-1.jpg', 'Kshama smiling on a Google Meet video call, on my laptop screen', { width: 900, height: 1600 }), frame: 'rounded' },
          { image: photo('ch05/google-meet-2.jpg', 'Kshama on a Google Meet video call, on my laptop screen', { width: 900, height: 1600 }), frame: 'rounded' },
        ],
        caption: 'Google Meet',
      },
      {
        kind: 'text',
        paragraphs: [
          `Then there was you sending your YouTube video to my sister's email.`,
          `And me watching your fit checks.`,
          `Me downloading your photos.\nSaving them from Instagram.\nKeeping them in my phone.`,
          `Basically collecting little pieces of you without even realizing how attached I was becoming.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And then there was the missing.`, `God...`, `**the missing.**`],
      },
      {
        kind: 'text',
        paragraphs: [
          `Sometimes I just wanted to see you.`,
          `Not talk.\nNot text.\nNot call.`,
          `Just...`,
          `**see you.**`,
          `Even if it was for a little while.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `That craving to meet you became such a normal part of my days.`,
          `I'd wait for you.\nLook forward to seeing you.\nWonder when we'd meet next.`,
          `And somehow, even the waiting became part of our story.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: `But It Wasn't Always Easy`,
        paragraphs: [
          `I want this chapter to be honest too.`,
          `Because these fifty days weren't just cute dates, chocolates, calls and library moments.`,
          `We struggled too.`,
          `A lot.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `We fought.\nWe misunderstood each other.\nWe got frustrated.\nWe missed each other.`,
          `We had situations where we didn't know what the right thing to do was.`,
          `There were times when we had to sit down and actually figure things out.`,
          `There were times when one of us needed reassurance.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And there were times when we had to remind each other:`, `**“I'm still here.”**`],
      },
      {
        kind: 'text',
        paragraphs: [
          `But you know what I think is the coolest part about us?`,
          `**We trust each other.**`,
          `And we both want to stay together.`,
          `That's what makes all the difference.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because whenever something felt impossible...\nwe tried to find a solution together.`,
          `Whenever one of us wasn't sure...\nthe other tried to give that person certainty.`,
          `Whenever something felt like it was falling apart...\nwe didn't immediately give up.`,
          `We tried to fix it.`,
          `Together.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And maybe that's what love actually looks like.`,
          `Not never having problems.`,
          `But having problems...`,
          `and still choosing to sit beside each other and solve them.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'The Day Everything Felt Like It Was Ending',
        paragraphs: [
          `There is one moment from our first month that I don't think I'll ever forget.`,
          `There was a point where everything suddenly became really bad.`,
          `You had blocked Lucky everywhere.\nYou had left him.`,
          `And somehow, during all of that, he was calling me.`,
          `I was continuously on call with him.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Everything was happening at once.`,
          `You were dealing with your side.\nI was dealing with mine.`,
          `And somewhere in between all of it...`,
          `**we stopped talking to each other.**`,
          `For a whole day.\nJust one day.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `But honestly?`,
          `That one day felt like something much bigger.`,
          `It felt empty.\nIt felt wrong.\nIt felt like something had been taken away.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And I think that was the day both of us realized something we hadn't completely understood before.`,
          `How deeply we had become a part of each other's lives.`,
          `Because when we were together...\nwe were happy.`,
          `And when we weren't...\nit genuinely felt like someone had taken the life out of us.`,
          `Like we were just existing.\nNot really living.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And somewhere in that silence, I think we both understood:`, `**We really don't want to lose each other.**`],
      },
      {
        kind: 'text',
        paragraphs: [
          `That realization mattered.`,
          `Because after all the confusion...\nafter all the stress...`,
          `we found our way back to talking.`,
          `I remember sharing my YouTube channel comment Instagram ID password with you.`,
          `And you immediately logged in.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And then we talked.`,
          `And somewhere in that conversation...`,
          `we realized just how much we actually wanted each other.`,
          `How much we cared.`,
          `How much we had already become a part of each other's lives.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And maybe that difficult day gave us something beautiful too.`,
          `It showed us that even when things get difficult...`,
          `**we still choose each other.**`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'date',
        day: '22',
        month: 'September',
        heading: 'Our First Date',
        paragraphs: [
          `And then...`,
          `after everything we'd already been through...`,
          `we planned our first proper date.`,
          `A date I will never forget.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And yes...`,
          `I know there are some memories from that day that we don't want anymore.`,
          `So let's leave those there.`,
          `Gone.\nDeleted.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because when I think about 22 September...`,
          `I want to remember **us.**`,
          `I want to remember the beautiful parts.`,
          `Because there were so many.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`That was our first date.`, `Our first real date together.`, `And somehow...`, `it felt perfect.`],
      },
      {
        kind: 'text',
        paragraphs: [
          `I still remember you wearing that **white top.**`,
          `Uff.`,
          `You looked so beautiful.`,
          `And for the first time...`,
          `**we even matched our outfits.**`,
          `Aye hayee.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Our first matching outfit.`,
          `Another tiny little thing that somehow became a huge memory for me.`,
          `And then came the moment I'll probably remember forever.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `We were talking.`,
          `You were saying something.`,
          `You were telling me something...`,
          `and I don't even know what happened inside my head at that exact moment.`,
          `I just...`,
          `went closer.`,
          `And kissed you.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And basically...`, `**made you quiet.** 😂`, `Hehe.`],
      },
      {
        kind: 'text',
        paragraphs: [
          `But honestly?`,
          `That moment was everything.`,
          `Our first kiss.`,
          `On our first date.`,
          `With the person I had started my journey with only a few weeks earlier.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `I was so happy.`,
          `Like genuinely, ridiculously happy.`,
          `I remember thinking:`,
          `**“This is actually happening.”**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `The girl who had started as a random LinkedIn “hi”...`,
          `was now sitting there with me.`,
          `On our first date.`,
          `And we had just shared our first kiss.`,
          `How crazy is that?`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'Our First Month',
        paragraphs: [
          `And just like that...`,
          `days kept passing.`,
          `We kept meeting.\nKept talking.\nKept fighting.\nKept laughing.\nKept missing each other.\nKept understanding each other.\nKept finding new things to love about one another.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And somehow...`, `**our first thirty days were gone.**`, `One month.`, `Thirty days of us.`],
      },
      {
        kind: 'text',
        paragraphs: [
          `Thirty days of figuring each other out.\nThirty days of learning how the other person loves.\nThirty days of creating memories.\nThirty days of becoming closer.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And we celebrated that too.`, `Together.`, `We celebrated our one-month anniversary.`],
      },
      {
        kind: 'screen',
        image: photo('ch05/one-month.jpg', 'Our 1 Month Anniversary picture, 02.10.26: the two of us together, with “Same Team Always” and “My Favourite Person” written around us', { width: 1145, height: 1374 }),
        date: '2 October',
      },
      {
        kind: 'text',
        paragraphs: [`We celebrated Navratri together.`],
      },
      {
        kind: 'image',
        photo: {
          image: photo('ch05/navratri.jpg', 'The two of us at Navratri in traditional outfits, holding dandiya sticks under the lights', { width: 900, height: 1600, focal: { x: 50, y: 38 } }),
          caption: 'Navratri',
        },
      },
      {
        kind: 'text',
        paragraphs: [`We clicked so many pictures.`],
      },
      {
        kind: 'two-image',
        photos: [
          { image: photo('ch05/selfie-pink.jpg', 'A selfie of us — Kshama in a pink kurti, resting her head against mine', { width: 900, height: 1600, focal: { x: 50, y: 45 } }), ratio: 'portrait' },
          { image: photo('ch05/selfie-blue.jpg', 'A selfie of us both in light blue, under a station roof', { width: 1599, height: 900, focal: { x: 62, y: 40 } }), ratio: 'landscape' },
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `We spent more time together.`,
          `We became more comfortable with each other.`,
          `And with every passing day...`,
          `I felt myself getting closer to you.`,
          `More attached.\nMore protective.\nMore in love.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'You, My Wifey',
        paragraphs: [`And somewhere in all of these days...`, `I gave you a ring.`, `My wifey. ❤️`, `Hehe.`],
      },
      {
        kind: 'text',
        paragraphs: [
          `And I wonder if you're still wearing it while you're reading this.`,
          `Because if you are...`,
          `then I hope you know what that little ring means to me.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `It's not just a ring.`,
          `It's another tiny piece of our story.`,
          `Another little memory from these fifty days.`,
          `Something I gave you because...`,
          `well...`,
          `**you're my wifey.** 😂❤️`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'Fifty Days',
        paragraphs: [`And now...`, `here we are.`, `**Fifty days.**`, `Fifty days since we became us.`],
      },
      {
        kind: 'text',
        paragraphs: [
          `Fifty days of conversations.\nFifty days of calls.\nFifty days of waiting.\nFifty days of missing each other.\nFifty days of college.\nFifty days of libraries.\nFifty days of hugs.\nFifty days of holding hands.\nFifty days of chocolates.\nFifty days of tiffins.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Fifty days of pictures.\nFifty days of fights.\nFifty days of making up.\nFifty days of figuring things out.\nFifty days of choosing each other.\nFifty days of learning each other.\nFifty days of growing closer.`,
          `Fifty days of becoming a little more **us** every single day.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And if someone asked me what my favourite moment from these fifty days was...`,
          `I don't think I could give them one answer.`,
          `Because it isn't one moment.`,
          `It's all of it.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `The green kurti.\nThe first hug.\nThe first hand hold.\nThe first video call.\nThe library dates.\nThe late-night conversations.\nThe presentation preparation.\nThe keychain.\nThe tiffin.\nThe first chocolate.\nThe flirting.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `The fit checks.\nThe pictures.\nThe missing.\nThe waiting.\nThe fights.\nThe understanding.\nThe difficult days.\nThe days where we thought everything was ending.\nThe days where we found our way back.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `The first date.\nThe white top.\nThe matching outfits.\nThe first kiss.\nThe one-month anniversary.\nNavratri.\nThe ring.`,
          `And every tiny moment in between that only **we** understand.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `That's what these fifty days mean to me.`,
          `Not perfection.`,
          `Not some fairytale where nothing ever went wrong.`,
          `But something much more real.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `**Two people who found each other, fell for each other, struggled together, understood each other, and still kept choosing each other.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And honestly...`,
          `that's the part I'm proudest of.`,
          `Because through everything...`,
          `**it was still us.**`,
          `And I hope it stays that way.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        paragraphs: [`So...`, `Happy **50 days of us**, my bby.`, `My cutoo.\nMy sweeto.\nMy wifey.`],
      },
      {
        kind: 'text',
        paragraphs: [
          `Thank you for every single moment.\nThank you for every smile.\nThank you for every call.\nThank you for every hug.`,
          `Thank you even for the difficult days...`,
          `because somehow, they taught us how much we mean to each other.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `I don't know what the next fifty days will look like.`,
          `Or the next hundred.\nOr the next thousand.`,
          `But I know one thing.`,
          `If these first fifty days have taught me anything...`,
          `it's that I want to keep making memories with you.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `More dates.\nMore libraries.\nMore hugs.\nMore hand holding.\nMore late-night talks.\nMore fights that we eventually laugh about.\nMore pictures.\nMore chocolates.\nMore tiffins.\nMore random calls.\nMore stupid conversations.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`More moments where I look at you and think:`, `**“How did I get this lucky?”**`],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because somewhere in the middle of all these fifty days...`,
          `you stopped being just the girl I met.`,
          `You became...`,
          `**my person.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And that's why this isn't the end of our story.`,
          `It's just another page.`,
          `Another fifty days waiting to be written.`,
        ],
      },
      {
        kind: 'final',
        tone: 'ink',
        eyebrow: '50 Days',
        statement: 'Happy 50 days, my bby girl.',
        paragraphs: [`I love you.`, `A lot.`, `More than I probably know how to put into words.`],
        closing: 'Always yours. ❤️',
      },
    ],
  },
  {
    id: 'her',
    number: 6,
    label: 'Bonus',
    title: 'Her',
    subtitle: 'The girl behind my favourite memories.',
    description: 'The girl behind my favourite memories.',
    opening: {
      variant: 'image',
      image: photo('ch06/garden-smile.jpg', 'Kshama in a garden with a flower in her hair, smiling, chin resting on her hand', { width: 884, height: 1598, focal: { x: 50, y: 38 } }),
    },
    pages: [
      {
        kind: 'text',
        paragraphs: [
          `Okay...`,
          `Enough about **us** for a moment.`,
          `Enough about the days.\nEnough about the dates.\nEnough about how we met.\nEnough about how this story started.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because there is one thing I haven't properly told you yet.`,
          `And maybe I should have.`,
          `Maybe somewhere between all these chapters, I should have stopped talking about what happened...`,
          `and just talked about **you.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `So this chapter isn't about our story.`,
          `It isn't about the first fifty days.`,
          `It isn't about our first meeting, our first date, our first kiss, our fights, our calls, or anything else.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`This chapter is simply about one person.`, `**You.**`],
      },
      {
        kind: 'text',
        paragraphs: [`My girl.\nMy bby.\nMy cutoo.\nMy sweeto.\nMy wifey.`, `**Her.**`],
      },
      {
        kind: 'image',
        photo: { image: photo('ch06/rooftop-pout.jpg', 'Kshama on a rooftop at sunset, a flower in her hair, pouting with her hands under her chin', { width: 902, height: 1601, focal: { x: 45, y: 42 } }) },
      },
      {
        kind: 'text',
        heading: 'The Girl I Look at a Little Too Much',
        paragraphs: [`I don't know if you realize this...`, `but I look at you a lot.`, `Like...`, `**a lot.**`],
      },
      {
        kind: 'text',
        paragraphs: [
          `Sometimes we're talking and I genuinely forget what you were saying because I'm busy looking at you.`,
          `And then you probably wonder why I'm staring.`,
          `What am I supposed to do?`,
          `You expect me to have you sitting right in front of me and just...`,
          `**not look at you?**`,
          `Impossible.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `There is something about your face that makes me stop for a second.`,
          `Your eyes.\nYour smile.\nYour hair.\nThose little expressions you make.`,
          `The way you look when you're listening.\nThe way you look when you're annoyed.\nThe way you look when you're shy.\nThe way you look when you're trying not to smile.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And especially...`, `**the way you look when I compliment you and you start blushing.**`],
      },
      {
        kind: 'image',
        photo: { image: photo('ch06/shy-ring.jpg', 'Kshama smiling shyly, one hand over her eye, the ring on her finger', { width: 1152, height: 1536, focal: { x: 50, y: 50 } }) },
      },
      {
        kind: 'text',
        paragraphs: [
          `That one?`,
          `Dangerous.\nVery dangerous.`,
          `Because the more you blush...`,
          `the more I want to compliment you.`,
          `So technically...`,
          `**this is your fault.** 😂`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'Your Eyes',
        paragraphs: [
          `Your eyes deserve their own paragraph.`,
          `Actually...`,
          `they deserve more than a paragraph.`,
          `Because there is something about them.`,
          `I don't know how to explain it properly.`,
          `They're the kind of eyes that make me want to keep looking.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And sometimes when I'm with you, I catch myself thinking:`,
          `**“How can someone's eyes be this pretty?”**`,
          `Then I remember...`,
          `it's you.`,
          `So I stop being surprised.`,
        ],
      },
      {
        kind: 'image',
        photo: { image: photo('ch06/eyes.jpg', 'A close-up of Kshama, a flower in her hair, looking into the camera', { width: 720, height: 1280, focal: { x: 50, y: 35 } }) },
      },
      {
        kind: 'text',
        paragraphs: [
          `Your eyes have this weird ability to make everything else disappear for a second.`,
          `And if I ever stare at them for too long...`,
          `don't blame me.`,
          `I was just lost.`,
        ],
      },
      { kind: 'quote', quote: `Tumhari aankhon mein thoda sa address hi nahi hai mera.` },
      {
        kind: 'text',
        paragraphs: [`I keep getting lost there.`, `And honestly?`, `I don't even want directions.`],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'Your Smile',
        paragraphs: [
          `Your smile...`,
          `God.`,
          `Your smile might genuinely be one of my favourite things about you.`,
          `Especially when it's a real one.`,
          `Not the polite smile.\nNot the “haan haan okay” smile.`,
          `The actual one.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `The one where your whole face changes.\nThe one that makes your eyes look different.\nThe one that makes those little dimples appear.`,
          `That smile.`,
        ],
      },
      {
        kind: 'gallery',
        photos: [
          { image: photo('ch06/teal-2.jpg', 'Kshama smiling, chin on her hand, against a teal wall', { width: 1152, height: 1536, focal: { x: 55, y: 45 } }) },
          { image: photo('ch06/teal-1.jpg', 'Kshama with a soft smile and earphones in, against a teal wall', { width: 1152, height: 1536, focal: { x: 50, y: 45 } }) },
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `I don't know if you realize what it does to me.`,
          `But if making you smile was a job...`,
          `I'd happily work overtime.`,
          `No weekends.\nNo holidays.\nNo complaints.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`Because if I can be even a tiny reason behind that smile...`, `**that's enough for me.**`],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'Your Hair',
        paragraphs: [
          `And your hair...`,
          `Don't even get me started.`,
          `Sometimes I genuinely wonder how you manage to look so pretty without even trying.`,
          `Your hair just...`,
          `exists.`,
          `And somehow I'm impressed.`,
          `😂`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Especially when it falls around your face.`,
          `There are moments when I look at you and think:`,
          `**“Yeah... I'm definitely in trouble.”**`,
        ],
      },
      {
        kind: 'image',
        photo: { image: photo('ch06/garden-hair.jpg', 'Kshama in a garden, looking back over her shoulder, her long hair falling around her face', { width: 900, height: 1599, focal: { x: 45, y: 45 } }) },
      },
      {
        kind: 'text',
        paragraphs: [
          `Because every time I think I've already seen the prettiest version of you...`,
          `you somehow show up looking even better.`,
          `It's unfair, honestly.`,
          `I would like to file a complaint.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`But then again...`, `**who am I kidding?**`, `I like the problem.`],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: `You Don't Even Know How Pretty You Are`,
        paragraphs: [
          `And maybe this is my favourite thing about you.`,
          `I don't think you always realize how beautiful you are.`,
          `Sometimes you'll just be sitting there normally.`,
          `Doing absolutely nothing.`,
          `And I'll be looking at you thinking:`,
          `**“How does she not know?”**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `You don't need perfect makeup.\nYou don't need the perfect outfit.\nYou don't need to try too hard.\nYou don't need anything extra.`,
          `Because there are versions of you that I love the most...`,
          `where you're just being **you.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`Messy hair.\nRandom clothes.\nNo preparation.\nNo trying to impress anyone.`, `Just you.`],
      },
      {
        kind: 'gallery',
        photos: [
          { image: photo('ch06/home-penguin.jpg', 'Kshama at home, cuddling her penguin soft toy', { width: 1536, height: 1152, focal: { x: 55, y: 45 } }) },
          { image: photo('ch06/home-blue.jpg', 'Kshama at home in a blue top', { width: 1536, height: 1152, focal: { x: 55, y: 35 } }) },
          { image: photo('ch06/home-blue-2.jpg', 'Kshama at home in a blue top, a soft smile', { width: 1536, height: 1152, focal: { x: 55, y: 30 } }) },
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And somehow...`, `those are the moments where I find you the prettiest.`],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: `But It's Not Just Your Face`,
        paragraphs: [
          `And this is where I need you to listen properly.`,
          `Because if this chapter was only about how beautiful you are...`,
          `I'd be missing the biggest part.`,
          `I didn't fall for your face.`,
          `Not completely.`,
          `I fell for **you.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `For the way you talk.\nFor the way you care.\nFor the way you make me feel like I matter.\nFor the way you stand beside me.\nFor the way you can make an ordinary day feel different.\nFor the way you can turn a random conversation into something I'll remember.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `For your little moods.\nYour little reactions.\nYour random messages.\nYour “I want to tell you something.”\nYour calls.\nYour silences.\nYour excitement.\nYour anger.\nYour softness.\nYour stubbornness.\nYour cute little ways of being you.`,
          `All of it.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `**You are not just someone I find beautiful.**`,
          `You're someone I genuinely love knowing.`,
          `And that's a completely different thing.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'My Favourite Person',
        paragraphs: [
          `There are billions of people in this world.`,
          `And somehow...`,
          `out of all those people...`,
          `I found you.`,
          `That's crazy to me.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because before you came into my life, I didn't even know what my person would look like.`,
          `I didn't know where I'd meet her.\nI didn't know what she'd be like.\nI didn't know what her voice would sound like.\nI didn't know what her smile would look like.\nI didn't know what kind of little things would make me fall for her.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And then...`, `you happened.`, `And suddenly all those questions had an answer.`, `**You.**`],
      },
      {
        kind: 'text',
        paragraphs: [
          `You became the person whose message I wait for.`,
          `The person I want to tell things to.\nThe person I want to meet.\nThe person I miss.\nThe person I want beside me when something good happens.\nThe person I want beside me when something feels wrong.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `The person I want to annoy.\nThe person I want to make smile.\nThe person I want to hold.\nThe person I want to keep choosing.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'If I Had to Describe You',
        paragraphs: [`If someone asked me:`, `**“Describe her.”**`, `I'd probably fail.`],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because how do I describe someone who is simultaneously...`,
          `my peace and my pagalpan?`,
          `My favourite person and my favourite problem?`,
          `The person who can make me smile in seconds...\nand also make me think for hours?`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `The person I want to protect...\nand the same person who can completely destroy my ability to think when she looks at me a certain way? 😂`,
          `How do I describe that?`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Maybe I can't.`,
          `Maybe some people aren't meant to be described.`,
          `Maybe they're meant to be **felt.**`,
          `And that's what you are to me.`,
          `Something I feel.`,
          `Every day.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'You Have Become My Little Things',
        paragraphs: [
          `You are in my little things now.`,
          `In the songs I hear.\nIn the random thoughts I have.\nIn the places I go.\nIn the pictures I save.\nIn the moments where I suddenly smile for no reason.\nIn the urge to tell you something stupid.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `In the “I wish she was here” moments.\nIn the “I can't wait to see her” moments.\nIn the late-night conversations.\nIn the random good mornings.\nIn the random good nights.\nIn the stupid jokes.\nIn the photos.\nIn the memories.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Somehow...`,
          `you've quietly made your way into so many parts of my life.`,
          `And I don't want you out of any of them.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'If I Could Give You One Thing',
        paragraphs: [
          `If I could give you one thing...`,
          `I wouldn't give you flowers.\nI wouldn't give you diamonds.\nI wouldn't give you some expensive gift.`,
          `I'd give you **my eyes for a day.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Just one day.`,
          `So you could see yourself the way I see you.`,
          `You'd understand why I stare.\nWhy I smile when I look at you.\nWhy I save your pictures.\nWhy I remember the smallest details.\nWhy your smile matters to me.\nWhy seeing you can completely change my mood.\nWhy I think you're beautiful even when you don't feel beautiful.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`Why I look at you and think:`, `**“Yep. That's my girl.”**`, `Maybe then you'd finally understand.`],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'And If Beauty Was a Person...',
        paragraphs: [
          `If beauty was a person...`,
          `I'd probably still argue with it.`,
          `Because I'd say:`,
          `**“You're beautiful, sure... but have you seen my girl?”**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`And then I'd show them your picture.`],
      },
      {
        kind: 'image',
        photo: { image: photo('ch06/pink-chin.jpg', 'Kshama in a pink top, a flower in her hair, resting her chin on her hand', { width: 900, height: 1600, focal: { x: 40, y: 38 } }) },
      },
      {
        kind: 'text',
        paragraphs: [`And I'd be like:`, `**“Yeah. That's what I'm talking about.”**`, `😂❤️`],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because I'm obviously biased.\nExtremely biased.\nHopelessly biased.`,
          `And I don't plan on becoming objective anytime soon.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'My Favourite View',
        paragraphs: [
          `People have mountains.\nPeople have sunsets.\nPeople have beaches.\nPeople have skylines.`,
          `I have you.`,
          `And honestly...`,
          `I'm good.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `Because there are moments when I'm sitting next to you and I don't need anything else.`,
          `I don't need a perfect place.\nI don't need some expensive date.\nI don't need some beautiful background.`,
          `If you're sitting beside me...`,
          `**the view is already good.**`,
        ],
      },
      {
        kind: 'image',
        photo: { image: photo('ch06/rooftop-sunset.jpg', 'Kshama on a rooftop at sunset, looking back over her shoulder with a smile', { width: 900, height: 1599, focal: { x: 45, y: 45 } }) },
      },
      {
        kind: 'text',
        heading: 'The Girl I Want to Keep Discovering',
        paragraphs: [
          `And maybe this is the most beautiful part.`,
          `I don't want to know everything about you all at once.`,
          `I want to keep discovering you.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `I want to know your new favourite things.\nThe songs you'll love next year.\nThe places you'll want to visit.\nThe dreams you'll build.\nThe things that scare you.\nThe things that make you laugh uncontrollably.\nThe things you'll become proud of.\nThe little habits you'll develop.\nThe person you'll become.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `I want to meet every version of you.`,
          `Not just the girl you are today.`,
          `But every version of **you** that life creates.`,
          `And I hope...`,
          `in every version...`,
          `you still let me be there.`,
        ],
      },
      { kind: 'pause' },
      {
        kind: 'text',
        heading: 'Her',
        paragraphs: [`So...`, `who is she?`],
      },
      {
        kind: 'text',
        paragraphs: [
          `She's the girl who came into my life through a random LinkedIn message.\nShe's the girl who somehow turned a boring final year into my favourite year.\nShe's the girl whose “hi” changed my routine.\nShe's the girl I was nervous to meet.\nShe's the girl I couldn't stop looking at in the library.\nShe's the girl whose hand I first held.\nShe's the girl I had my first kiss with.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `She's the girl I fight with.\nShe's the girl I miss.\nShe's the girl I wait for.\nShe's the girl I tease.\nShe's the girl I want to make smile.\nShe's the girl I want beside me.\nShe's the girl who makes me feel loved.\nShe's the girl I trust.\nShe's the girl I choose.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `She's my favourite notification.\nMy favourite face.\nMy favourite voice.\nMy favourite person.`,
          `My bby girl.\nMy cutoo.\nMy sweeto.\nMy wifey.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `And maybe...`,
          `my favourite coincidence in this entire life.`,
          `Because if that LinkedIn “hi” had never happened...`,
          `I wouldn't have you.`,
          `And I don't even want to imagine that version of my life.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [
          `So yes...`,
          `this entire book is called **50 Days of Us Together.**`,
          `But if you ever ask me what the best part of those fifty days was...`,
          `I don't need to think about it.`,
          `I know the answer.`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`**It was you.**`, `It has always been you.`],
      },
      {
        kind: 'text',
        paragraphs: [
          `And if I had to write this entire book again...`,
          `I'd still choose the same beginning.`,
          `The same random “hi.”\nThe same first meeting.\nThe same girl.\nThe same story.`,
          `**You.**`,
        ],
      },
      {
        kind: 'text',
        paragraphs: [`Because out of everything that happened in these fifty days...`, `**you are my favourite part.**`],
      },
      {
        kind: 'text',
        paragraphs: [`And bby...`, `if you're reading this right now...`, `come here.`, `I have one last thing to tell you.`],
      },
      {
        kind: 'text',
        paragraphs: [`You're really, really pretty.`, `Like...`, `**stupidly pretty.**`],
      },
      {
        kind: 'text',
        paragraphs: [
          `And yes...`,
          `I'm still going to stare at you.`,
          `So please stop asking:`,
          `**“Why are you looking at me?”**`,
          `Because the answer is very simple.`,
        ],
      },
      {
        kind: 'final',
        tone: 'ink',
        eyebrow: 'Her',
        statement: `I'm looking at my favourite girl.`,
        paragraphs: [`And I think...`],
        closing: `I'll never get tired of that view. ❤️`,
      },
    ],
  },
];
