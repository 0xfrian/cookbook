export const example_theme: any = {
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph",
};

export const initial_config: any = {
  namespace: "MyEditor",
  theme: example_theme,
  onError: (error: Error) => { throw error },
};


