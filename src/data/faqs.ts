export interface FAQ {
    id: string;
    question: string;
    answer: string;
}

export const faqs: FAQ[] = [
    {
        id: "faq-1",
        question: "Is it legal to hire a hacker service?",
        answer: "Yes, when done correctly. You can legally hire a hacker service if you own the system, account, or device, you have written authorization, and the service is ethical and documented. All platforms listed on this page operate within legal frameworks and require proper authorization."
    },
    {
        id: "faq-2",
        question: "What is the difference between ethical and illegal hacking?",
        answer: "Ethical hacking requires ownership or written authorization, operates within cybersecurity laws, and focuses on protection and prevention. It's used by banks, governments, and corporations. Illegal hacking happens without permission, violates privacy laws, and can lead to criminal charges."
    },
    {
        id: "faq-3",
        question: "What services do ethical hackers provide?",
        answer: "Ethical hackers provide cybersecurity testing for websites and apps, ethical phone or device monitoring (with consent), account recovery for owned or authorized accounts, digital forensics and investigations, parental or employee monitoring solutions, penetration testing and vulnerability assessments, fraud detection, and cyber risk audits."
    },
    {
        id: "faq-4",
        question: "How do I choose the right ethical hacker service?",
        answer: "Ask these questions: Do they require authorization? Do they explain what they can and cannot do? Are services clearly defined? Are there real reviews? Do they avoid illegal promises? If a website guarantees access to 'any phone, any account, anytime', that's a red flag."
    },
    {
        id: "faq-5",
        question: "Can ethical hackers recover hacked accounts?",
        answer: "Yes, ethical hackers can assist with account recovery for accounts you own or have authorization to access. They use legitimate methods to help regain access and secure the account against future attacks. Proof of ownership is typically required."
    },
    {
        id: "faq-6",
        question: "What is penetration testing?",
        answer: "Penetration testing (pen testing) is an authorized simulated cyberattack on a computer system to evaluate its security. Ethical hackers attempt to breach systems, applications, or networks using the same techniques as malicious hackers, but with permission and for defensive purposes."
    },
    {
        id: "faq-7",
        question: "Are freelance platforms safe for hiring ethical hackers?",
        answer: "Verified platforms like Fiverr and Upwork reduce risk by providing review systems, escrow payments, and identity verification. However, you should still check freelancer credentials, read reviews carefully, and avoid unrealistic promises. Always ensure the work stays within legal boundaries."
    },
    {
        id: "faq-8",
        question: "How much does it cost to hire an ethical hacker?",
        answer: "Costs vary widely based on the service. Simple security audits on Fiverr may start at $50-200. Professional penetration testing through specialized platforms like Cyberlords can range from $500 to $10,000+ depending on scope. Enterprise-level ongoing security contracts on Upwork can be significantly higher."
    }
];
