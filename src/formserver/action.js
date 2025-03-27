"use server";

import axios from "axios";
import { redirect } from "next/navigation";
redirect;

export async function formServer(prevState, queryData) {
  const fullname = queryData.get("fullname");
  const email = queryData.get("email");
  const phone = queryData.get("phone");

  if (!fullname && !email && !phone) {
    return;
  } else {
    const poster = axios.post(
      "http://ssquare-app-env.eba-t2ymhzv5.us-east-2.elasticbeanstalk.com/api/user",
      {
        email: await email,
        fullname: await fullname,
        phone: await phone,
      }
    );
    return redirect("/thanks");
  }
}
