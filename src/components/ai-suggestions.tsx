'use client';

import {useFormState, useFormStatus} from 'react-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@/components/ui/label';
import {getSuggestions, type SuggestionResult} from '@/app/actions';
import {WandSparkles, Loader2, ExternalLink, AlertTriangle} from 'lucide-react';
import {Alert, AlertDescription} from '@/components/ui/alert';
import Link from 'next/link';
import {useState, useEffect, useRef} from 'react';

const initialState: SuggestionResult = {
  success: false,
  error: null,
  suggestions: null,
};

function SubmitButton() {
  const {pending} = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Thinking...
        </>
      ) : (
        'Get Suggestions'
      )}
    </Button>
  );
}

export function AiSuggestions() {
  const [state, formAction] = useFormState(getSuggestions, initialState);
  const [open, setOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Reset form when dialog is closed
    if (!open) {
      formRef.current?.reset();
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <WandSparkles className="mr-2 h-4 w-4" />
          AI Suggestions
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>AI Website Suggestions</DialogTitle>
          <DialogDescription>
            Paste some text from your browsing history, and our AI will suggest
            relevant websites. The more detail, the better the suggestions.
          </DialogDescription>
        </DialogHeader>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="grid w-full gap-2">
            <Label htmlFor="browsingHistory">Your Browsing History</Label>
            <Textarea
              id="browsingHistory"
              name="browsingHistory"
              placeholder="e.g., 'React tutorials, Next.js documentation, best CSS frameworks, headless UI components, state management in React...'"
              rows={6}
              className="bg-background"
            />
          </div>
          {state.error && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}

          <DialogFooter>
            <SubmitButton />
          </DialogFooter>
        </form>

        {state.success && state.suggestions && state.suggestions.length > 0 && (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-semibold">Here are some suggestions:</h3>
            <div className="max-h-60 space-y-3 overflow-y-auto rounded-md border p-3">
              {state.suggestions.map((site) => (
                <div
                  key={site.url}
                  className="rounded-lg p-3 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{site.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {site.reason}
                      </p>
                    </div>
                    <Button asChild variant="ghost" size="icon">
                      <Link href={site.url} target="_blank">
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
         {state.success && state.suggestions?.length === 0 && (
          <div className="mt-6 text-center text-muted-foreground">
            <p>The AI couldn't find any new suggestions based on your history.</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
