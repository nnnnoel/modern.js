---
title: 路由
sidebar_position: 1
---

Modern.js 内置了对 [React Router 6](https://reactrouter.com/en/main) 的**部分**支持，并提供了多种类型的路由模式。根据不同[入口](/docs/guides/concept/entries)类型，将路由分为三种模式，分别是**约定式路由**，**自控式路由**和**配置式路由**。

:::note
本小节提到的路由，都是客户端路由，即 SPA 路由。
:::

## 约定式路由

以 `routes/` 为约定的入口，Modern.js 会自动基于文件系统，生成对应的路由结构。

Modern.js 支持了业界流行的约定路由模式：**嵌套路由**，使用嵌套路由时，页面的路由 与 UI 结构是相呼应的，我们将会详细介绍这种路由模式。

```
/user/johnny/profile                  /user/johnny/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```

### 路由文件约定

`routes/` 目录下有两个文件约定 `layout.[jt]sx` 和 `page.[jt]sx`（后面简写为 `.tsx`）。这两个文件决定了应用的布局层次，其中 `layout.tsx` 中作为布局组件，`page.tsx` 作为内容组件，是整个路由表的叶子节点。

例如，这里 `routes/layout.tsx` 会作为 `/` 路由下所有组件的布局组件使用：

```bash
.
└── routes
    ├── layout.tsx
    ├── page.tsx
    └── user
        ├── layout.tsx
        └── page.tsx
```

当路由为 `/` 时，会有以下 UI 布局：

```tsx
<Layout>
  <Page />
</Layout>
```

同样，`routes/user/layout.tsx` 会作为 `/user` 路由下所有组件的布局组件使用。当路由为 `/user` 时， 会有以下 UI 布局：

```tsx
<Layout>
  <UserLayout>
    <UserPage>
  <UserLayout>
</Layout>
```

#### Layout

`<Layout>` 组件是指 `routes/` 目录下所有 `layout.tsx` 文件，它们表示对应路由片段的布局，使用 `<Outlet>` 表示子组件。

:::note
`<Outlet>` 是 React Router 6 中新的 API，详情可以查看 [Outlet](https://reactrouter.com/en/main/components/outlet#outlet).
:::

为了方便介绍 `<Layout>` 与 `<Outlet>` 的关系，以下面的文件目录举例：

```bash
.
└── routes
    ├── blog
    │   └── page.tsx
    ├── layout.tsx
    ├── page.tsx
    └── user
        ├── layout.tsx
        └── page.tsx
```

1. 当路由为 `/` 时，`routes/layout.tsx` 中的 `<Outlet>` 代表的是 `routes/page.tsx` 中导出的组件，生成以下 UI 结构：

```tsx
<Layout>
  <Page />
</Layout>
```

2. 当路由为 `/blog` 时，`routes/layout.tsx` 中的 `<Outlet>` 代表的是 `routes/blog/page.tsx` 中导出的组件，生成以下 UI 结构：
```tsx
<Layout>
  <BlogPage />
</Layout>
```

3. 当路由为 `/user` 时，`routes/layout.tsx` 中的 `<Outlet>` 代表的是 `routes/user/layout.tsx` 中导出的组件。`routes/user/layout.tsx` 中的 `<Outlet>` 代表的是 `routes/user/page.tsx` 中导出的组件。生成以下 UI 结构：

```tsx
<Layout>
  <UserLayout>
    <UserPage>
  <UserLayout>
</Layout>
```

总结而言，如果子路由的文件目录下存在 `layout.tsx`，上一级 `layout.tsx` 中的 `<Outlet>` 即为子路由文件目录下的 `layout.tsx` ，否则为子路由文件目录下的 `page.tsx`。

#### Page

所有的路由，理论上都应该由 `<Page>` 组件结束。在 `page.tsx` 文件内，如果开发者引入 `<Outlet>` 组件，不会有任何效果。

### 动态路由

通过 `[]` 命名的文件目录，生成的路由会作为动态路由。例如以下文件目录：

```
└── routes
    ├── [id]
    │   └── page.tsx
    ├── blog
    │   └── page.tsx
    └── page.tsx
```

`routes/[id]/page.tsx` 文件会转为 `/:id` 路由。除了可以确切匹配的 `/blog` 路由，其他所有 `/xxx` 都会匹配到该路由。

在组件中，可以通过 [useParams](/docs/apis/app/runtime/router/#useparams) 获取对应命名的参数。

### 无路径布局

当目录名以 __ 开头时，对应的目录名不会转换为实际的路由路径，例如以下文件目录：

```
.
└── routes
    ├── __auth
    │   ├── layout.tsx
    │   ├── login
    │   │   └── page.tsx
    │   └── signup
    │       └── page.tsx
    ├── layout.tsx
    └── page.tsx
```

Modern.js 会生成 `/login` 和 `/sign` 两条路由，`__auth/layout.tsx` 组件会作为 `login/page.tsx` 和 `signup/page.tsx` 的布局组件，但__auth 不会作为路由路径片段。

当需要为某些类型的路由，做独立的布局，或是想要将路由做归类时，这一功能非常有用。

### 无布局路径

有些情况下，项目需要较为复杂的路由，但这些路由又不存在独立的 UI 布局，如果像普通文件目录那边创建路由会导致目录层级较深。

因此 Modern.js 支持了通过 `.` 来分割路由片段，代替文件目录。例如，当需要 `/user/profile/2022/edit` 时，可以直接创建如下文件：

```
└── routes
    ├── user.profile.[id].edit
    │      └── page.tsx
    ├── layout.tsx
    └── page.tsx
```

访问路由时，将得到如下 UI 布局：

```tsx
<RootLayout>
   <UserProfileEdit />   // routes/user.profile.[id].edit/page.tsx
</RootLayout>
```

### Loading

`routes/` 下每一层目录中，开发者可以创建 `loading.tsx` 文件，默认导出一个 `<Loading>` 组件。

当路由目录下存在该组件时，这一级子路由下所有的路由切换时，都会以该 `<Loading>` 组件作为 JS Chunk 加载时的 Fallback UI。当该目录下未定义 `layout.tsx` 文件时，`<Loading>` 组件不会生效。例如以下文件目录：

```bash
.
└── routes
    ├── blog
    │   ├── [id]
    │   │   └── page.tsx
    │   └── page.tsx
    ├── layout.tsx
    ├── loading.tsx
    └── page.tsx
```

当路由从 `/` 跳转到 `/blog` 时，如果 `<Blog>` 组件的 JS Chunk 还未加载，则会先展示 `loading.tsx` 中导出的组件 UI。但从 `/blog` 跳转到 `/blog/20220101` 时，则不会展示。

### 错误处理

`routes/` 下每一层目录中，开发者同样可以定义一个 `error.tsx` 文件，默认导出一个 `<ErrorBoundary>` 组件。

当有路由目录下存在该组件时，组件渲染出错会被 ErrorBoundary 组件捕获。当目录未定义 `layout.tsx` 文件时，`<ErrorBoundary>` 组件不会生效。

`<ErrorBoundary>` 可以返回出错时的 UI 视图，当前层级未声明 `<ErrorBoundary>` 组件时，错误会向上冒泡到更上层的组件，直到被捕获或抛出错误。同时，当组件出错时，只会影响捕获到该错误的路由组件及子组件，其他组件的状态和视图不受影响，可以继续交互。

<!-- Todo API 路由-->
在 `<ErrorBoundary>` 组件内，可以使用 [useRouteError](/docs/apis/app/runtime/router/#useparams) 获取的错误的具体信息：

```tsx
import { useRouteError } from '@modern-js/runtime/router';
export default const ErrorBoundary = () => {
  const error = useRouteError();
  return (
    <div>
        <h1>{error.status}</h1>
        <h2>{error.message}</h2>
    </div>
  )
}
```

## 自控式路由

以 `routes/` 为约定的入口，Modern.js 不会多路由做额外的操作，开发者可以自行使用 React Router 6 的 API 进行开发。

例如：

```tsx
import {
  Route,
  Routes,
  BrowserRouter,
  Outlet,
} from '@modern-js/runtime/router';

export default () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<div>index</div>} />
          <Route
            path="user"
            element={
              <div>
                User Layout
                <Outlet />
              </div>
            }
          >
            <Route index element={<div>user</div>} />
            <Route path="profile" element={<div>profile</div>} />
          </Route>
          <Route path="about" element={<div>about</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
```

:::note
在自控式路由下，开发者如果希望在 SSR 中使用 React Router 6 中 [Loader API](https://reactrouter.com/en/main/hooks/use-loader-data#useloaderdata) 的能力会相对复杂，推荐直接使用约定式路由。Modern.js 已经为你封装好了一切。

<!-- Todo 嵌套路由带来的优化可以补充下文档-->
如果项目只想升级到 React Router 6，而不希望使用嵌套路由带来的优化，那[useLoader](/docs/apis/app/runtime/core/use-loader) 在 SSR 下仍然可以工作。
:::

## 配置式路由

:::note
敬请期待
:::