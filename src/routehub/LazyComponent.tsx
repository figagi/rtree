import React, { lazy, Suspense } from "react";
import Loading from "../components/Loading";

const LazyComponent = (importFunc: any) => {
  const LazyCom = lazy(importFunc);
  return (props: any) => (
    <Suspense fallback={<Loading /> || "加载中..."}>
      <LazyCom {...props} />
    </Suspense>
  );
};

export default LazyComponent;
