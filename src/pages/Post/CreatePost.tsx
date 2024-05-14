import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import MDEditor from "@uiw/react-md-editor";
import rehypeSanitize from "rehype-sanitize";
import { useTheme } from "@/components/theme-provider";

const FormSchema = z.object({
  text: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  image: z.any().optional(),
});

export function CreatePost() {
  const { theme } = useTheme();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      text: "",
      image: undefined,
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("1");
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-6 flex flex-col gap-4 items-center"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Content:</FormLabel>
              <FormControl>
                <div className="container" data-color-mode={theme}>
                  <MDEditor
                    height={500}
                    previewOptions={{
                      rehypePlugins: [[rehypeSanitize]],
                    }}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="file"
                  {...field}
                  className="hover:opacity-50 active:opacity-80 duration-300"
                />
              </FormControl>
              <FormDescription>Upload Image or txt file</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant={"ghost"} className="mt-4">
          Submit
        </Button>
      </form>
    </Form>
  );
}
