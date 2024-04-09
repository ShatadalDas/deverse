"use client";

import { GradientBtn } from "@/components";
import styles from "./page.module.scss";
import langArr from "@/utils/langArr";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useToast, useUniqueId } from "@/hooks";
import { Editor } from "@monaco-editor/react";
import { PostSchema } from "@/utils/zodSchema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios, { AxiosError } from "axios";

function Post() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(PostSchema),
  });

  const toast = useToast();
  const router = useRouter();
  const [languageSelected, setLanguageSelected] = useState("python");
  const uniqueId = useUniqueId();
  const [phoneInp, setPhoneInp] = useState("");

  useEffect(() => {
    router.push("/post?lang=" + languageSelected);
  }, [router, languageSelected]);

  function onSubmit(formData: any) {
    if (phoneInp.length) {
      toast?.show("error", "Bots are forbidden", 403);
      return;
    }

    axios
      .post("/api/create/post", formData)
      .then((res) => {
        console.log(res);
        toast?.show("success", "Post created successfully", 201);
      })
      .catch((err: AxiosError) => {
        const res = err.response?.data as {
          body?: Record<string, unknown>;
          error?: string;
          status: number;
        };

        toast?.show(
          "error",
          res?.error || "Something went wrong",
          res?.status || 500
        );
      });
  }

  return (
    <form className={styles.postForm} onSubmit={handleSubmit(onSubmit)}>
      {/* This input field is for bots only */}
      <input
        type="tel"
        aria-hidden
        style={{
          display: "none",
        }}
        value={phoneInp}
        onChange={(e) => {
          setPhoneInp(e.target.value);
        }}
      />

      <section className={styles.leftSection}>
        <div
          className={`${styles.descriptionWrapper}  ${
            errors["description"]?.message ? styles.error : ""
          }`}
        >
          <label
            htmlFor="post-description"
            data-error-msg={errors["description"]?.message}
          >
            Description
          </label>
          <textarea
            id="post-description"
            className={`${styles.descriptionTextArea}`}
            placeholder="eg: Lorem ipsum dolor sit amet consectetur. Habitasse blandit nisl vitae duis rhoncus eu. Tellus quam sit id vulputate vitae et sed tellus. Posuere natoque in integer orci velit. Egestas pharetra eu morbi massa ut eu nisl consectetur."
            {...register("description")}
          />
        </div>
        <div
          className={`${styles.hashtagsWrapper}  ${
            errors["hashtags"]?.message ? styles.error : ""
          }`}
        >
          <label
            htmlFor="hashtags-input"
            data-error-msg={errors["hashtags"]?.message}
          >
            Hashtags
          </label>
          <textarea
            id="hashtags-input"
            className={`${styles.hashtagsTextArea}`}
            placeholder="eg: #topic1  #topic2  #topic3"
            {...register("hashtags")}
          />
        </div>
      </section>

      <section className={styles.rightSection}>
        <div className={styles.buttonWrapper}>
          <label htmlFor="select-language" className="sr-only">
            Select Language for the code
          </label>
          <select
            id="select-language"
            value={languageSelected}
            className={styles.dropDownMenu}
            {...register("language")}
            onChange={(e) => setLanguageSelected(e.target.value)}
          >
            {langArr.map((lang) => (
              <option value={lang} key={uniqueId()}>
                {lang}
              </option>
            ))}
          </select>
          <GradientBtn text="Done" className={styles.gradientBtn} />
        </div>
        <div
          className={`${styles.codeWrapper} ${
            errors["code"]?.message ? styles.error : ""
          }`}
        >
          <label
            htmlFor="code-input"
            data-error-msg={errors["code"]?.message}
            onClick={(e) => e.preventDefault()}
          >
            Code
          </label>
          <div aria-hidden>
            <Controller
              name="code"
              control={control}
              render={({ field: { onChange, value } }) => (
                <>
                  <textarea
                    id="code-input"
                    className="sr-only"
                    value={value}
                    tabIndex={-1}
                  />
                  <Editor
                    language={languageSelected}
                    theme="vs-dark"
                    className={styles.codeEditor}
                    value={value}
                    onChange={onChange}
                  />
                </>
              )}
            />
          </div>
        </div>
      </section>
    </form>
  );
}
export default Post;
