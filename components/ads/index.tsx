import { ClassAttributes, InsHTMLAttributes, JSX, useEffect } from "react"

const AddBanner = (
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLModElement> &
    InsHTMLAttributes<HTMLModElement>
) => {
  useEffect(() => {
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <ins
      className="adsbygoogle  add-banner-customize"
      style={{ display: "block", overflow: "hidden" }}
      data-ad-client={process.env.NEXT_PUBLIC_ADS_CLIENT_ID}
      {...props}
    />
  )
}

export default AddBanner
