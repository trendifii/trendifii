'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

type FAQItem = {
    id: string
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            question: 'What is Trendifii?',
            answer: 'Using Trendifii you can earn rewards for the purchases you make and post online.',
        },
        {
            id: 'item-2',
            question: 'I am not a creator or youtuber can I still earn?',
            answer: 'Of course! you just need to have 1000+ followers and a public account.',
        },
        {
            id: 'item-3',
            question: 'How to download and sign up for Trendifii?',
            answer: 'Download the app from playstore or apple store. Signup and do the registration, you need to be atleast 18 years old to use the app. And for getting rewards you need to have atleast 1000 followers.',
        },
        {
            id: 'item-4',
            question: 'How to Link Your Account?',
            answer: 'Sign up or log in to Trendifii and head to the accounts page. Select the platform of the account you would like to link and click "Add account". Follow the steps within the app and log in via the pop-up browser. Once your account is linked, it is quick and easy to add posts to the app.',
        }
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can't find what you're looking for? Contact us{' '}
                                <Link
                                    href="mailto:hello@trendifii.com"
                                    className="text-primary font-medium hover:underline">
                                    hello@trendifii.com
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
