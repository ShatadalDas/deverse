"use client";
import Link from "next/link";
import styles from "./SignupLoginStructure.module.scss";
import Image from "next/image";
import { GradientBtn, LogoBg } from "@/components";
import googleIcon from "@/assets/google-icon.svg";
import githubIcon from "@/assets/github-icon.svg";
import gitlabIcon from "@/assets/gitlab-icon.svg";
import linkedinIcon from "@/assets/linkedin-icon-2.svg";
import appleIcon from "@/assets/apple-icon.svg";
import microsoftIcon from "@/assets/microsoft-icon.svg";
import { LoginUserSchema, SignUpUserSchema } from "@/utils/zodSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useCookies } from "next-client-cookies";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks";

type Props = {
  title: string;
  type: "login" | "sign-up";
  submitBtnText: string;
  linkText: string;
  className?: string;
};

function SignupLoginStructure({
  title,
  type,
  submitBtnText,
  linkText,
  className,
}: Props) {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      type === "sign-up" ? SignUpUserSchema : LoginUserSchema
    ),
  });

  const formRef = useRef<HTMLFormElement>(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [phoneInp, setPhoneInp] = useState("");
  const cookie = useCookies();
  const router = useRouter();
  const toast = useToast();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //this function will be called only when the formData is of valid shape for the respective routes
  async function onSubmit(formData: unknown) {
    //to survive from bots
    if (phoneInp.length) {
      toast?.show("error", "Bots are forbidden", 403);
      return;
    }

    //to prevent users to submit multiple times
    setSubmitDisabled(true);
    const inputs = formRef.current?.querySelectorAll("input");
    inputs?.forEach((input) => {
      input.disabled = true;
    });

    try {
      const res = await axios.post(`/api/${type}`, formData);
      if (res.data["status"] === 200) {
        const successMessage =
          type === "login"
            ? "Login successful"
            : "Account created successfully";

        toast?.show("success", successMessage, 201);

        window.localStorage.setItem("userInfo", JSON.stringify(res.data.body));

        const authToken = res.headers["auth"];
        cookie.remove("auth");

        cookie.set("auth", authToken, {
          expires: 30, //30 days
          secure: true,
          sameSite: "None",
        });
        router.push("/");
      } else {
        toast?.show("error", res.data["error"], res.data["status"]);

        const err = res.data["error"] as string;
        if (err.toLowerCase().includes("email")) {
          setError("email", {
            message: err,
          });
        }
        if (err.toLowerCase().includes("userid")) {
          setError("userId", {
            message: err,
          });
        }
        setSubmitDisabled(false);
        inputs?.forEach((input) => {
          input.disabled = false;
        });
        console.log(res.data["error"]);
      }
    } catch (error) {
      toast?.show("error", "Oops, Something went wrong!", 500);

      setSubmitDisabled(false);
      inputs?.forEach((input) => {
        input.disabled = false;
      });
    }
  }

  return (
    <>
      <LogoBg />
      <div className={`${styles.container} ${className}`}>
        <main className={styles.mainWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <form
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
            ref={formRef}
          >
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

            <section className={styles.inputFieldsWrapper}>
              {type === "sign-up" && (
                <>
                  <label htmlFor="firstname" className="sr-only">
                    First Name
                  </label>
                  <div
                    className={errors.firstname?.message ? styles.error : ""}
                  >
                    <input
                      type="text"
                      id="firstname"
                      placeholder="firstname"
                      {...register("firstname")}
                      maxLength={50}
                    />
                  </div>
                  <p>{errors.firstname?.message?.toString()}</p>

                  <label htmlFor="lastname" className="sr-only">
                    Last Name
                  </label>
                  <div className={errors.lastname?.message ? styles.error : ""}>
                    <input
                      type="text"
                      id="lastname"
                      placeholder="lastname"
                      {...register("lastname")}
                      maxLength={50}
                    />
                  </div>
                  <p>{errors.lastname?.message?.toString()}</p>
                </>
              )}

              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className={errors.email?.message ? styles.error : ""}>
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  {...register("email")}
                />
              </div>
              <p>{errors.email?.message?.toString()}</p>

              {type === "login" && <p className={styles.orWrapper}>or</p>}

              <label htmlFor="userId" className="sr-only">
                User ID
              </label>
              <div
                className={
                  (errors.userId?.message ? styles.error : "") +
                  " " +
                  styles.userIdWrapper
                }
              >
                <span>@</span>
                <input
                  type="text"
                  id="userId"
                  placeholder="userId"
                  {...register("userId")}
                />
              </div>
              <p>{errors.userId?.message?.toString()}</p>

              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className={errors.password?.message ? styles.error : ""}>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="password"
                  {...register("password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((state) => !state)}
                >
                  {showPassword ? (
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.41866 14.2263L4.91416 9.72184C3.14083 11.655 2.46883 13.5917 2.45716 13.6313L2.3335 14L2.456 14.3687C2.48166 14.4468 5.158 22.1667 14.0632 22.1667C15.147 22.1667 16.134 22.0477 17.0405 21.8482L13.8368 18.6445C12.6833 18.588 11.5921 18.1043 10.7755 17.2877C9.95885 16.4711 9.47521 15.3798 9.41866 14.2263ZM14.0632 5.83334C11.899 5.83334 10.1257 6.30467 8.6475 6.99767L4.325 2.67517L2.67533 4.32484L23.6753 25.3248L25.325 23.6752L21.4773 19.8275C24.555 17.549 25.6528 14.4177 25.6692 14.3687L25.7917 14L25.6692 13.6313C25.6435 13.5532 22.9683 5.83334 14.0632 5.83334ZM16.2868 14.637C16.505 13.8472 16.3195 12.9582 15.7128 12.3503C15.1062 11.7425 14.216 11.5582 13.4262 11.7763L11.6668 10.017C12.3878 9.57365 13.2168 9.33713 14.0632 9.33334C16.6368 9.33334 18.7298 11.4263 18.7298 14C18.7264 14.8462 18.4894 15.675 18.045 16.3952L16.2868 14.637Z" />
                    </svg>
                  ) : (
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_160_1392)">
                        <path d="M13.9998 5.25C8.1665 5.25 3.18484 8.87833 1.1665 14C3.18484 19.1217 8.1665 22.75 13.9998 22.75C19.8332 22.75 24.8148 19.1217 26.8332 14C24.8148 8.87833 19.8332 5.25 13.9998 5.25ZM13.9998 19.8333C10.7798 19.8333 8.1665 17.22 8.1665 14C8.1665 10.78 10.7798 8.16667 13.9998 8.16667C17.2198 8.16667 19.8332 10.78 19.8332 14C19.8332 17.22 17.2198 19.8333 13.9998 19.8333ZM13.9998 10.5C12.0632 10.5 10.4998 12.0633 10.4998 14C10.4998 15.9367 12.0632 17.5 13.9998 17.5C15.9365 17.5 17.4998 15.9367 17.4998 14C17.4998 12.0633 15.9365 10.5 13.9998 10.5Z" />
                      </g>
                      <defs>
                        <clipPath id="clip0_160_1392">
                          <rect width="28" height="28" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </button>
              </div>
              <p>{errors.password?.message?.toString()}</p>

              {type === "sign-up" && (
                <>
                  <label htmlFor="confirmPassword" className="sr-only">
                    Confirm Password
                  </label>
                  <div
                    className={
                      errors.confirmPassword?.message ? styles.error : ""
                    }
                  >
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      placeholder="confirm password"
                      {...register("confirmPassword")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((state) => !state)}
                    >
                      {showConfirmPassword ? (
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.41866 14.2263L4.91416 9.72184C3.14083 11.655 2.46883 13.5917 2.45716 13.6313L2.3335 14L2.456 14.3687C2.48166 14.4468 5.158 22.1667 14.0632 22.1667C15.147 22.1667 16.134 22.0477 17.0405 21.8482L13.8368 18.6445C12.6833 18.588 11.5921 18.1043 10.7755 17.2877C9.95885 16.4711 9.47521 15.3798 9.41866 14.2263ZM14.0632 5.83334C11.899 5.83334 10.1257 6.30467 8.6475 6.99767L4.325 2.67517L2.67533 4.32484L23.6753 25.3248L25.325 23.6752L21.4773 19.8275C24.555 17.549 25.6528 14.4177 25.6692 14.3687L25.7917 14L25.6692 13.6313C25.6435 13.5532 22.9683 5.83334 14.0632 5.83334ZM16.2868 14.637C16.505 13.8472 16.3195 12.9582 15.7128 12.3503C15.1062 11.7425 14.216 11.5582 13.4262 11.7763L11.6668 10.017C12.3878 9.57365 13.2168 9.33713 14.0632 9.33334C16.6368 9.33334 18.7298 11.4263 18.7298 14C18.7264 14.8462 18.4894 15.675 18.045 16.3952L16.2868 14.637Z" />
                        </svg>
                      ) : (
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_160_1392)">
                            <path d="M13.9998 5.25C8.1665 5.25 3.18484 8.87833 1.1665 14C3.18484 19.1217 8.1665 22.75 13.9998 22.75C19.8332 22.75 24.8148 19.1217 26.8332 14C24.8148 8.87833 19.8332 5.25 13.9998 5.25ZM13.9998 19.8333C10.7798 19.8333 8.1665 17.22 8.1665 14C8.1665 10.78 10.7798 8.16667 13.9998 8.16667C17.2198 8.16667 19.8332 10.78 19.8332 14C19.8332 17.22 17.2198 19.8333 13.9998 19.8333ZM13.9998 10.5C12.0632 10.5 10.4998 12.0633 10.4998 14C10.4998 15.9367 12.0632 17.5 13.9998 17.5C15.9365 17.5 17.4998 15.9367 17.4998 14C17.4998 12.0633 15.9365 10.5 13.9998 10.5Z" />
                          </g>
                          <defs>
                            <clipPath id="clip0_160_1392">
                              <rect width="28" height="28" />
                            </clipPath>
                          </defs>
                        </svg>
                      )}
                    </button>
                  </div>
                  <p>{errors.confirmPassword?.message?.toString()}</p>
                </>
              )}
            </section>

            <section className={styles.linkWrapper}>
              <p>
                {type === "login"
                  ? "Don't have an account ?"
                  : "Already have an account ?"}
              </p>
              <Link href={type === "sign-up" ? "/login" : "/sign-up"}>
                {linkText}
              </Link>
            </section>

            <section className={styles.thirdPartySignUpLoginSection}>
              <button>
                <div>
                  <Image src={googleIcon} alt="" />
                </div>
                <p>Google</p>
              </button>
              <button>
                <div>
                  <Image src={githubIcon} alt="" />
                </div>
                <p>Github</p>
              </button>
              <button>
                <div>
                  <Image
                    className={styles.microsoftIcon}
                    src={microsoftIcon}
                    alt=""
                  />
                </div>
                <p>Microsoft</p>
              </button>
              <button>
                <div>
                  <Image src={appleIcon} alt="" />
                </div>
                <p>Apple</p>
              </button>
              <button>
                <div>
                  <Image src={linkedinIcon} alt="" />
                </div>
                <p>LinkedIn</p>
              </button>
              <button>
                <div>
                  <Image src={gitlabIcon} alt="" />
                </div>
                <p>Gitlab</p>
              </button>
            </section>

            <GradientBtn
              text={submitBtnText}
              className={styles.gradientBtn}
              disabled={submitDisabled}
            />
          </form>
        </main>
      </div>
    </>
  );
}

export default SignupLoginStructure;
