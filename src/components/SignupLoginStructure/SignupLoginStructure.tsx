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
  return (
    <>
      <LogoBg />
      <div className={`${styles.container} ${className}`}>
        <main className={styles.mainWrapper}>
          <h2 className={styles.title}>{title}</h2>
          <form className={styles.form}>
            <section className={styles.inputFieldsWrapper}>
              {type === "sign-up" && (
                <>
                  <label htmlFor="firstname" className="sr-only">
                    First Name
                  </label>
                  <div>
                    <input type="text" id="firstname" placeholder="firstname" />
                  </div>
                  <p></p>

                  <label htmlFor="lastname" className="sr-only">
                    Last Name
                  </label>
                  <div>
                    <input type="text" id="lastname" placeholder="lastname" />
                  </div>
                  <p></p>
                </>
              )}

              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div>
                <input type="email" id="email" placeholder="email" />
              </div>
              <p></p>

              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div>
                <input type="password" id="password" placeholder="password" />
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_160_1392)">
                    <path
                      d="M13.9998 5.25C8.1665 5.25 3.18484 8.87833 1.1665 14C3.18484 19.1217 8.1665 22.75 13.9998 22.75C19.8332 22.75 24.8148 19.1217 26.8332 14C24.8148 8.87833 19.8332 5.25 13.9998 5.25ZM13.9998 19.8333C10.7798 19.8333 8.1665 17.22 8.1665 14C8.1665 10.78 10.7798 8.16667 13.9998 8.16667C17.2198 8.16667 19.8332 10.78 19.8332 14C19.8332 17.22 17.2198 19.8333 13.9998 19.8333ZM13.9998 10.5C12.0632 10.5 10.4998 12.0633 10.4998 14C10.4998 15.9367 12.0632 17.5 13.9998 17.5C15.9365 17.5 17.4998 15.9367 17.4998 14C17.4998 12.0633 15.9365 10.5 13.9998 10.5Z"
                      fill="white"
                      fill-opacity="0.4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_160_1392">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p></p>

              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <div>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="confirm password"
                />
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_160_1392)">
                    <path
                      d="M13.9998 5.25C8.1665 5.25 3.18484 8.87833 1.1665 14C3.18484 19.1217 8.1665 22.75 13.9998 22.75C19.8332 22.75 24.8148 19.1217 26.8332 14C24.8148 8.87833 19.8332 5.25 13.9998 5.25ZM13.9998 19.8333C10.7798 19.8333 8.1665 17.22 8.1665 14C8.1665 10.78 10.7798 8.16667 13.9998 8.16667C17.2198 8.16667 19.8332 10.78 19.8332 14C19.8332 17.22 17.2198 19.8333 13.9998 19.8333ZM13.9998 10.5C12.0632 10.5 10.4998 12.0633 10.4998 14C10.4998 15.9367 12.0632 17.5 13.9998 17.5C15.9365 17.5 17.4998 15.9367 17.4998 14C17.4998 12.0633 15.9365 10.5 13.9998 10.5Z"
                      fill="white"
                      fill-opacity="0.4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_160_1392">
                      <rect width="28" height="28" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p></p>
            </section>

            <section className={styles.linkWrapper}>
              <p>{type === "login" ? "Don't have an account ?" : "Already have an account ?"}</p>
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

            <GradientBtn text={submitBtnText} className={styles.gradientBtn} />
          </form>
        </main>
      </div>
    </>
  );
}

export default SignupLoginStructure;
