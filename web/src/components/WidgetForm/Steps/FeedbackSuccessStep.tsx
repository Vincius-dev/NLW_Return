import { ClosedButton } from "../../ClosedButton"
import { feedbackTypes } from "../Index"

import successImageUrl from '../../../assets/success.svg';

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: () => void;
}

export const successImage = {
    SUCCESS: {
        title: 'Sucesso',
        image: {
            source: successImageUrl,
            alt: 'Imagem de sucesso',
        },

    }
}

export function FeedbackSuccessStep({ 
    onFeedbackRestartRequested 
}: FeedbackSuccessStepProps){
    return (
        <>
            <header>
                <ClosedButton/>
            </header>

            <div className="flex flex-col items-center py-10 w-[304px]">
                <img src={successImage.SUCCESS.image.source}/>
                <span className="text-xl mt-2"> Agradecemos o feedback"</span>

                <button
                    onClick={onFeedbackRestartRequested}
                    className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colorshover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}