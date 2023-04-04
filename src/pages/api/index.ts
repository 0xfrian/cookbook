// Types
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "GET") {
    console.log("GET request received at: /");
    res.json({
      name: "0xfrian",
    });
  }
}

