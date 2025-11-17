
import React from 'react';

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Problem Test', path: '/problem-test' },
  { name: 'Other Tests', path: '/thinking-style-test' },
  { name: 'Solutions Library', path: '/solutions' },
  { name: 'About', path: '/about' },
];

export const ICONS: { [key: string]: React.ReactNode } = {
  Mind: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  ),
  Emotion: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Behavior: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Environment: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
};

export const TINY_LIFE_UPGRADES: string[] = [
  'Clean one random folder on your computer.',
  'Eat one piece of fruit mindfully.',
  'Stretch your wrists and neck for 30 seconds.',
  'Delete one useless app from your phone.',
  'Drink a glass of water before checking your phone.',
  'Write down one thing you are grateful for.',
  'Take three deep breaths, focusing on your exhale.',
  'Send a quick positive text to a friend.',
  'Organize one small drawer or shelf.',
  'Spend 60 seconds looking out a window.',
  'Stand up and stretch for a full minute.',
  'Unsubscribe from one email newsletter you never read.',
  'Wipe down your keyboard and mouse.',
  'Jot down a single goal for tomorrow.',
  'Listen to one favorite song without doing anything else.',
  'Put away one thing that\'s out of place.',
  'Compliment the next person you talk to.',
  'Tidy up your desk or a small corner of a room.',
  'Refill your water bottle.',
  'Think of a happy memory and hold it for 30 seconds.',
  'Unfollow a social media account that makes you feel bad.',
  'Straighten the pictures on your wall.',
  'Smile at yourself in the mirror.',
  'Do 10 jumping jacks.',
  'Write down one thing you like about yourself.',
  'Delete a few old photos from your phone to free up space.',
  'Fix your posture right now. Sit or stand up straight.',
  'Learn how to say "hello" in a new language.',
  'Water a plant.',
  'Close all the unnecessary tabs in your browser.',
  'Plan a healthy snack for later.',
  'Step outside and take a deep breath of fresh air.',
  'Read one page of a book.',
  'Put on some lotion.',
  'Change your computer or phone background to something calming.',
  'Make your bed if you haven\'t already.',
  'Clear the notifications on your phone.',
  'Say "no" to a small, unimportant request.',
  'Throw away one piece of trash from your bag or car.',
  'Find a new podcast to listen to later.',
  'Do a quick mental scan of your body and release any tension you find.',
  'Schedule a 5-minute break for later in the day.',
  'Think of one thing you\'re looking forward to.',
  'Make a cup of tea or coffee mindfully.',
  'Wash your hands thoroughly, focusing on the sensation.',
  'Put a new, inspiring quote on your desk.',
  'Organize your desktop icons.',
  'Tell a pet you love them.',
  'Write down an idea, any idea.',
  'Open a window to let in fresh air.',
  'Take your vitamins or medication.',
  'Throw out expired food from your fridge.',
  'Replace the roll of toilet paper or paper towels.',
  'Find the number for an appointment you need to book.',
  'Put on socks that make you happy.',
  'Light a candle or use a diffuser with a pleasant scent.',
  'Do a quick 60-second tidy of your entryway.',
  'Add one healthy item to your grocery list.',
  'Watch a short, funny video.',
  'Acknowledge one thing you\'ve accomplished today, no matter how small.',
];
