---
title: 考研数学二公式知识点汇总
date: 2025-08-05
updated: 2025-08-05
categories: 考研笔记
tags:
  - 考研
  - 数学二
  - 公式
cover:
top: 2
---

## 前言

本文汇总了**考研数学二**的核心公式与知识点，涵盖高等数学和线性代数两大部分。数学二不考概率论与数理统计，也不考无穷级数（幂级数除外），复习时可据此合理分配精力。


---

## 第一部分：高等数学

### 一、函数、极限与连续

#### 1.1 极限运算法则

**四则运算法则**（设 $\lim f(x) = A$，$\lim g(x) = B$）：

$$
\begin{aligned}
\lim[f(x) \pm g(x)] &= A \pm B \\
\lim[f(x) \cdot g(x)] &= A \cdot B \\
\lim\frac{f(x)}{g(x)} &= \frac{A}{B} \quad (B \neq 0)
\end{aligned}
$$

#### 1.2 两个重要极限

$$
\lim_{x \to 0} \frac{\sin x}{x} = 1
$$

$$
\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x = e
$$

**推广形式**：

$$
\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e
$$

#### 1.3 等价无穷小（$x \to 0$）

$$
\begin{aligned}
\sin x &\sim x \\
\tan x &\sim x \\
\arcsin x &\sim x \\
\arctan x &\sim x \\
\ln(1 + x) &\sim x \\
e^x - 1 &\sim x \\
1 - \cos x &\sim \frac{1}{2}x^2 \\
(1 + x)^\alpha - 1 &\sim \alpha x \\
a^x - 1 &\sim x \ln a \quad (a > 0)\\
e^x - 1 - x &\sim x - \ln(1 + x) \\
x - \ln(1+x) &\sim 1 - \cos x \\
x - \sin x &\sim \arcsin x -x \\
x - \sin x &\sim \frac{1}{6}x^3\\
x - \tan x &\sim \arctan x -x \\
x - \tan x &\sim \frac{1}{3}x^3\\
\tan x - \sin x &\sim \frac{1}{2}x^3\\
\tan x - \sin x &\sim \arctan x - \arcsin x\\
\end{aligned}
$$

#### 1.4 无穷小的比较

设 $\alpha(x) \to 0$，$\beta(x) \to 0$：

| 条件 | 关系 |
|------|------|
| $\lim \frac{\beta}{\alpha} = 0$ | $\beta$ 是 $\alpha$ 的**高阶**无穷小，记 $\beta = o(\alpha)$ |
| $\lim \frac{\beta}{\alpha} = \infty$ | $\beta$ 是 $\alpha$ 的**低阶**无穷小 |
| $\lim \frac{\beta}{\alpha} = c \neq 0$ | $\beta$ 与 $\alpha$ **同阶**无穷小 |
| $\lim \frac{\beta}{\alpha} = 1$ | $\beta$ 与 $\alpha$ **等价**无穷小，记 $\alpha \sim \beta$ |
| $\lim \frac{\beta}{\alpha^k} = c \neq 0$ | $\beta$ 是 $\alpha$ 的 **$k$ 阶**无穷小 |

#### 1.5 洛必达法则

对于 $\frac{0}{0}$ 或 $\frac{\infty}{\infty}$ 型未定式：

$$
\lim \frac{f(x)}{g(x)} = \lim \frac{f'(x)}{g'(x)}
$$

> **注意**：使用前验证条件（函数在去心邻域可导，分母导数不为零），且可多次使用。

#### 1.6 函数的连续性

**定义**：$f(x)$ 在 $x_0$ 处连续 $\iff \lim\limits_{x \to x_0} f(x) = f(x_0)$

**间断点分类**：

| 类型 | 定义 |
|------|------|
| **第一类**：可去间断点 | 左右极限存在且相等，但不等于函数值 |
| **第一类**：跳跃间断点 | 左右极限存在但不相等 |
| **第二类**：无穷间断点 | 至少一侧极限为 $\infty$ |
| **第二类**：振荡间断点 | 极限不存在（振荡型） |

**闭区间连续函数的性质**：

- **最值定理**：闭区间上的连续函数必有最大值和最小值
- **介值定理**：闭区间上的连续函数能取到介于最小值和最大值之间的任何值
- **零点定理**：若 $f(a) \cdot f(b) < 0$，则存在 $\xi \in (a, b)$ 使 $f(\xi) = 0$

---

### 二、一元函数微分学

#### 2.1 导数定义

$$
f'(x_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x) - f(x_0)}{\Delta x} = \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0}
$$

**可导与连续的关系**：可导 $\Rightarrow$ 连续，反之不成立。

#### 2.2 基本求导公式

| 函数 | 导数 |
|------|------|
| $C$（常数） | $0$ |
| $x^\alpha$ | $\alpha x^{\alpha-1}$ |
| $a^x$ | $a^x \ln a$ |
| $e^x$ | $e^x$ |
| $\log_a x$ | $\frac{1}{x \ln a}$ |
| $\ln x$ | $\frac{1}{x}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x \tan x$ |
| $\csc x$ | $-\csc x \cot x$ |
| $\arcsin x$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\arccos x$ | $-\frac{1}{\sqrt{1-x^2}}$ |
| $\arctan x$ | $\frac{1}{1+x^2}$ |
| $\operatorname{arccot} x$ | $-\frac{1}{1+x^2}$ |

#### 2.3 求导法则

**四则运算**：

$$
\begin{aligned}
(f \pm g)' &= f' \pm g' \\
(f \cdot g)' &= f'g + fg' \\
\left(\frac{f}{g}\right)' &= \frac{f'g - fg'}{g^2} \quad (g \neq 0)
\end{aligned}
$$

**链式法则（复合函数求导）**：

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

**反函数求导**：

$$
\frac{dx}{dy} = \frac{1}{\frac{dy}{dx}}
$$

**隐函数求导**：方程 $F(x, y) = 0$ 两边同时对 $x$ 求导，得到：

$$
F_x + F_y \cdot y' = 0 \quad \Rightarrow \quad y' = -\frac{F_x}{F_y}
$$

**参数方程求导**（设 $\begin{cases} x = \varphi(t) \\ y = \psi(t) \end{cases}$）：

一阶导：
$$
\frac{dy}{dx} = \frac{\psi'(t)}{\varphi'(t)}
$$

二阶导：
$$
\frac{d^2y}{dx^2} = \frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}} = \frac{\psi''(t)\varphi'(t) - \psi'(t)\varphi''(t)}{[\varphi'(t)]^3}
$$

#### 2.4 高阶导数

**莱布尼茨公式**：

$$
(uv)^{(n)} = \sum_{k=0}^{n} \binom{n}{k} u^{(n-k)} v^{(k)}
$$

**常见高阶导数**：

$$
\begin{aligned}
(e^x)^{(n)} &= e^x \\
(\sin x)^{(n)} &= \sin\!\left(x + \frac{n\pi}{2}\right) \\
(\cos x)^{(n)} &= \cos\!\left(x + \frac{n\pi}{2}\right) \\
(\ln(1+x))^{(n)} &= (-1)^{n-1} \frac{(n-1)!}{(1+x)^n} \\
\left(\frac{1}{x}\right)^{(n)} &= (-1)^n \frac{n!}{x^{n+1}}
\end{aligned}
$$

#### 2.5 微分中值定理

| 定理 | 条件 | 结论 |
|------|------|------|
| **罗尔定理** | $f \in C[a,b]$，$f$ 在 $(a,b)$ 可导，$f(a) = f(b)$ | 存在 $\xi \in (a,b)$，$f'(\xi) = 0$ |
| **拉格朗日** | $f \in C[a,b]$，$f$ 在 $(a,b)$ 可导 | 存在 $\xi \in (a,b)$，$f'(\xi) = \frac{f(b)-f(a)}{b-a}$ |
| **柯西** | $f,g \in C[a,b]$，可导，$g'(x) \neq 0$ | 存在 $\xi$，$\frac{f(b)-f(a)}{g(b)-g(a)} = \frac{f'(\xi)}{g'(\xi)}$ |

#### 2.6 泰勒公式

**带拉格朗日余项**：

$$
f(x) = f(x_0) + f'(x_0)(x-x_0) + \frac{f''(x_0)}{2!}(x-x_0)^2 + \cdots + \frac{f^{(n)}(x_0)}{n!}(x-x_0)^n + R_n
$$

其中 $R_n = \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}$，$\xi$ 在 $x_0$ 与 $x$ 之间。

**常用麦克劳林展开（$x_0 = 0$）**：

$$
\begin{aligned}
e^x &= 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + o(x^n) \\
\sin x &= x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots + (-1)^n \frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2}) \\
\cos x &= 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots + (-1)^n \frac{x^{2n}}{(2n)!} + o(x^{2n+1}) \\
\ln(1+x) &= x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots + (-1)^{n-1} \frac{x^n}{n} + o(x^n) \\
(1+x)^\alpha &= 1 + \alpha x + \frac{\alpha(\alpha-1)}{2!}x^2 + \cdots + \frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n + o(x^n) \\
\frac{1}{1-x} &= 1 + x + x^2 + \cdots + x^n + o(x^n)
\end{aligned}
$$

#### 2.7 单调性与极值

**单调性判别**：

- $f'(x) > 0$ 在区间 $I$ 上 $\Rightarrow$ $f(x)$ 在 $I$ 上严格**递增**
- $f'(x) < 0$ 在区间 $I$ 上 $\Rightarrow$ $f(x)$ 在 $I$ 上严格**递减**

**极值判别**：

**第一充分条件**：设 $f'(x_0) = 0$：

- $x < x_0$ 时 $f' > 0$，$x > x_0$ 时 $f' < 0$ $\Rightarrow$ **极大值**
- $x < x_0$ 时 $f' < 0$，$x > x_0$ 时 $f' > 0$ $\Rightarrow$ **极小值**

**第二充分条件**：设 $f'(x_0) = 0$，$f''(x_0) \neq 0$：

- $f''(x_0) < 0$ $\Rightarrow$ **极大值**
- $f''(x_0) > 0$ $\Rightarrow$ **极小值**

#### 2.8 凹凸性与拐点

**凹凸性判别**：

- $f''(x) > 0$ $\Rightarrow$ 曲线**凹**（上凹 / 下凸）
- $f''(x) < 0$ $\Rightarrow$ 曲线**凸**（下凹 / 上凸）

**拐点**：$f''(x_0) = 0$（或不存在）且 $f''(x)$ 在 $x_0$ 两侧**变号**。

#### 2.9 渐近线

| 类型 | 定义 | 求法 |
|------|------|------|
| **水平渐近线** | $y = b$ | $b = \lim\limits_{x \to \pm\infty} f(x)$ |
| **垂直渐近线** | $x = x_0$ | $\lim\limits_{x \to x_0} f(x) = \infty$（通常 $x_0$ 为无定义点） |
| **斜渐近线** | $y = kx + b$ | $k = \lim\limits_{x \to \pm\infty} \frac{f(x)}{x}$，$b = \lim\limits_{x \to \pm\infty} [f(x) - kx]$ |

> **注意**：同一方向有水平渐近线则无斜渐近线。

#### 2.10 曲率

**曲率公式**：

$$
K = \frac{|y''|}{(1 + y'^2)^{3/2}}
$$

**曲率半径**：

$$
\rho = \frac{1}{K}
$$

---

### 三、一元函数积分学

#### 3.1 基本积分公式

$$
\begin{aligned}
\int 0 \, dx &= C \\
\int x^\alpha \, dx &= \frac{x^{\alpha+1}}{\alpha+1} + C \quad (\alpha \neq -1) \\
\int \frac{1}{x} \, dx &= \ln|x| + C \\
\int a^x \, dx &= \frac{a^x}{\ln a} + C \quad (a > 0, a \neq 1) \\
\int e^x \, dx &= e^x + C \\
\int \sin x \, dx &= -\cos x + C \\
\int \cos x \, dx &= \sin x + C \\
\int \tan x \, dx &= -\ln|\cos x| + C \\
\int \cot x \, dx &= \ln|\sin x| + C \\
\int \sec x \, dx &= \ln|\sec x + \tan x| + C \\
\int \csc x \, dx &= \ln|\csc x - \cot x| + C \\
\int \sec^2 x \, dx &= \tan x + C \\
\int \csc^2 x \, dx &= -\cot x + C \\
\int \sec x \tan x \, dx &= \sec x + C \\
\int \csc x \cot x \, dx &= -\csc x + C \\
\int \frac{1}{1+x^2} \, dx &= \arctan x + C \\
\int \frac{1}{\sqrt{1-x^2}} \, dx &= \arcsin x + C \\
\int \frac{1}{a^2 + x^2} \, dx &= \frac{1}{a}\arctan\frac{x}{a} + C \\
\int \frac{1}{\sqrt{a^2 - x^2}} \, dx &= \arcsin\frac{x}{a} + C \\
\int \frac{1}{x^2 - a^2} \, dx &= \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right| + C
\end{aligned}
$$

#### 3.2 积分方法

**第一换元法（凑微分）**：

$$
\int f(\varphi(x))\varphi'(x) \, dx = \int f(u) \, du \quad (u = \varphi(x))
$$

**第二换元法（变量代换）**：

$$
\int f(x) \, dx = \int f(\varphi(t))\varphi'(t) \, dt
$$

常用代换：

| 被积函数含 | 代换 |
|------------|------|
| $\sqrt{a^2 - x^2}$ | $x = a\sin t$ |
| $\sqrt{a^2 + x^2}$ | $x = a\tan t$ |
| $\sqrt{x^2 - a^2}$ | $x = a\sec t$ |

**分部积分法**：

$$
\int u \, dv = uv - \int v \, du
$$

常见分部积分类型：

| 类型 | $u$ | $dv$ |
|------|-----|------|
| $\int x^n e^x \, dx$ | $x^n$ | $e^x \, dx$ |
| $\int x^n \sin x \, dx$ | $x^n$ | $\sin x \, dx$ |
| $\int x^n \ln x \, dx$ | $\ln x$ | $x^n \, dx$ |
| $\int e^x \sin x \, dx$ | 任意 | 需分部两次（循环型） |

#### 3.3 定积分

**牛顿-莱布尼茨公式**：

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

其中 $F'(x) = f(x)$。

**定积分的对称性**：

$$
\int_{-a}^{a} f(x) \, dx =
\begin{cases}
0, & f(x) \text{ 是奇函数} \\
2\int_0^a f(x) \, dx, & f(x) \text{ 是偶函数}
\end{cases}
$$

**周期函数的定积分**（设 $f$ 周期为 $T$）：

$$
\int_a^{a+T} f(x) \, dx = \int_0^T f(x) \, dx
$$

**华里士（Wallis）公式**：

$$
\int_0^{\frac{\pi}{2}} \sin^n x \, dx = \int_0^{\frac{\pi}{2}} \cos^n x \, dx =
\begin{cases}
\frac{n-1}{n} \cdot \frac{n-3}{n-2} \cdots \frac{1}{2} \cdot \frac{\pi}{2}, & n \text{ 为偶数} \\
\frac{n-1}{n} \cdot \frac{n-3}{n-2} \cdots \frac{2}{3} \cdot 1, & n \text{ 为奇数}
\end{cases}
$$

#### 3.4 变限积分

**变限积分求导公式**：

$$
\frac{d}{dx} \int_{a}^{x} f(t) \, dt = f(x)
$$

**推广（上下限均为函数）**：

$$
\frac{d}{dx} \int_{\varphi(x)}^{\psi(x)} f(t) \, dt = f(\psi(x))\psi'(x) - f(\varphi(x))\varphi'(x)
$$

#### 3.5 反常积分

**无穷限反常积分**：

$$
\int_a^{+\infty} f(x) \, dx = \lim_{b \to +\infty} \int_a^b f(x) \, dx
$$

**无界函数的反常积分**（瑕积分）：若 $\lim\limits_{x \to b^-} f(x) = \infty$：

$$
\int_a^b f(x) \, dx = \lim_{\varepsilon \to 0^+} \int_a^{b-\varepsilon} f(x) \, dx
$$

**常见结论**：

- $\int_1^{+\infty} \frac{1}{x^p} \, dx$ 收敛 $\iff p > 1$
- $\int_0^1 \frac{1}{x^p} \, dx$ 收敛 $\iff p < 1$

#### 3.6 定积分应用

**平面图形面积**：

$$
A = \int_a^b |f(x) - g(x)| \, dx
$$

**极坐标下面积**：

$$
A = \frac{1}{2}\int_\alpha^\beta r^2(\theta) \, d\theta
$$

**旋转体体积**（绕 $x$ 轴，圆盘法）：

$$
V = \pi \int_a^b [f(x)]^2 \, dx
$$

**旋转体体积**（绕 $y$ 轴，柱壳法）：

$$
V = 2\pi \int_a^b x f(x) \, dx
$$

**平面曲线弧长**：

直角坐标：
$$
s = \int_a^b \sqrt{1 + [f'(x)]^2} \, dx
$$

参数方程：
$$
s = \int_{t_1}^{t_2} \sqrt{[\varphi'(t)]^2 + [\psi'(t)]^2} \, dt
$$

**旋转体侧面积**（绕 $x$ 轴）：

$$
S = 2\pi \int_a^b f(x) \sqrt{1 + [f'(x)]^2} \, dx
$$

---

### 四、多元函数微分学

#### 4.1 偏导数

**一阶偏导**：

$$
f_x(x_0, y_0) = \lim_{\Delta x \to 0} \frac{f(x_0 + \Delta x, y_0) - f(x_0, y_0)}{\Delta x}
$$

**高阶偏导**（混合偏导在连续条件下与次序无关）：

$$
\frac{\partial^2 f}{\partial x \partial y} = \frac{\partial^2 f}{\partial y \partial x}
$$

#### 4.2 全微分

$$
dz = \frac{\partial z}{\partial x} dx + \frac{\partial z}{\partial y} dy
$$

**可微的充分条件**：偏导数连续 $\Rightarrow$ 可微 $\Rightarrow$ 偏导数存在（反之不成立）。

#### 4.3 复合函数偏导（链式法则）

设 $z = f(u, v)$，$u = u(x, y)$，$v = v(x, y)$：

$$
\begin{aligned}
\frac{\partial z}{\partial x} &= \frac{\partial z}{\partial u} \cdot \frac{\partial u}{\partial x} + \frac{\partial z}{\partial v} \cdot \frac{\partial v}{\partial x} \\
\frac{\partial z}{\partial y} &= \frac{\partial z}{\partial u} \cdot \frac{\partial u}{\partial y} + \frac{\partial z}{\partial v} \cdot \frac{\partial v}{\partial y}
\end{aligned}
$$

#### 4.4 隐函数求导

由 $F(x, y) = 0$ 确定的隐函数 $y = y(x)$：

$$
\frac{dy}{dx} = -\frac{F_x}{F_y}
$$

由 $F(x, y, z) = 0$ 确定的隐函数 $z = z(x, y)$：

$$
\frac{\partial z}{\partial x} = -\frac{F_x}{F_z}, \quad \frac{\partial z}{\partial y} = -\frac{F_y}{F_z}
$$

#### 4.5 多元函数的极值

**无条件极值**：

1. 解方程组 $\begin{cases} f_x(x, y) = 0 \\ f_y(x, y) = 0 \end{cases}$，得驻点 $(x_0, y_0)$
2. 计算 $A = f_{xx}(x_0, y_0)$，$B = f_{xy}(x_0, y_0)$，$C = f_{yy}(x_0, y_0)$
3. 判别式 $\Delta = AC - B^2$：

| 条件 | 结论 |
|------|------|
| $\Delta > 0$，$A > 0$ | **极小值** |
| $\Delta > 0$，$A < 0$ | **极大值** |
| $\Delta < 0$ | 不是极值（鞍点） |
| $\Delta = 0$ | 不确定，需进一步讨论 |

**条件极值（拉格朗日乘数法）**：

求 $z = f(x, y)$ 在 $\varphi(x, y) = 0$ 下的极值，构造拉格朗日函数：

$$
L(x, y, \lambda) = f(x, y) + \lambda \varphi(x, y)
$$

解方程组：

$$
\begin{cases}
L_x = f_x + \lambda \varphi_x = 0 \\
L_y = f_y + \lambda \varphi_y = 0 \\
L_\lambda = \varphi(x, y) = 0
\end{cases}
$$

---

### 五、二重积分

#### 5.1 二重积分的计算

**直角坐标**：

$$
\iint_D f(x, y) \, dxdy
$$

- **X 型区域**（先 $y$ 后 $x$）：$D: a \leq x \leq b,\; y_1(x) \leq y \leq y_2(x)$

$$
\iint_D f(x,y) \, dxdy = \int_a^b dx \int_{y_1(x)}^{y_2(x)} f(x,y) \, dy
$$

- **Y 型区域**（先 $x$ 后 $y$）：$D: c \leq y \leq d,\; x_1(y) \leq x \leq x_2(y)$

$$
\iint_D f(x,y) \, dxdy = \int_c^d dy \int_{x_1(y)}^{x_2(y)} f(x,y) \, dx
$$

**极坐标**：

$$
\iint_D f(x, y) \, dxdy = \iint_D f(r\cos\theta, r\sin\theta) \cdot r \, dr d\theta
$$

> **何时用极坐标**：被积函数含 $x^2 + y^2$ 或积分区域为圆/扇形/圆环。

**对称性**：

- 若 $D$ 关于 $y$ 轴对称，$f$ 关于 $x$ 是奇函数 $\Rightarrow$ 积分为 $0$
- 若 $D$ 关于 $x$ 轴对称，$f$ 关于 $y$ 是奇函数 $\Rightarrow$ 积分为 $0$

---

### 六、微分方程

#### 6.1 一阶微分方程

**可分离变量型**：

$$
\frac{dy}{dx} = f(x)g(y)
$$

解法：分离变量 $\frac{dy}{g(y)} = f(x)dx$，两边积分。

**齐次型**：

$$
\frac{dy}{dx} = \varphi\!\left(\frac{y}{x}\right)
$$

解法：令 $u = \frac{y}{x}$，则 $y = ux$，$\frac{dy}{dx} = u + x\frac{du}{dx}$。

**一阶线性**：

标准形：
$$
\frac{dy}{dx} + P(x)y = Q(x)
$$

通解公式：
$$
y = e^{-\int P \, dx} \left[ \int Q \cdot e^{\int P \, dx} \, dx + C \right]
$$

**伯努利方程**：

$$
\frac{dy}{dx} + P(x)y = Q(x)y^n \quad (n \neq 0, 1)
$$

解法：令 $z = y^{1-n}$，化为一阶线性方程。

#### 6.2 可降阶的高阶微分方程

**$y^{(n)} = f(x)$ 型**：逐次积分。

**$y'' = f(x, y')$ 型**（不显含 $y$）：令 $p = y'$，则 $y'' = p'$。

**$y'' = f(y, y')$ 型**（不显含 $x$）：令 $p = y'$，则 $y'' = p\frac{dp}{dy}$。

#### 6.3 二阶常系数线性微分方程

**齐次方程**：$y'' + py' + qy = 0$

特征方程：$r^2 + pr + q = 0$

| 判别式 | 特征根 | 通解 |
|--------|--------|------|
| $\Delta > 0$ | 两不等实根 $r_1 \neq r_2$ | $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$ |
| $\Delta = 0$ | 二重根 $r$ | $y = (C_1 + C_2 x) e^{r x}$ |
| $\Delta < 0$ | 共轭复根 $r = \alpha \pm i\beta$ | $y = e^{\alpha x}(C_1 \cos\beta x + C_2 \sin\beta x)$ |

**非齐次方程**：$y'' + py' + qy = f(x)$

通解 = 齐次通解 + 特解

**$f(x) = P_m(x) e^{\lambda x}$ 型特解形式**：

设特解 $y^* = x^k Q_m(x) e^{\lambda x}$，其中：

- $k$ 为 $\lambda$ 作为特征根的重数（$0, 1, 2$）
- $Q_m(x)$ 为与 $P_m(x)$ 同次的多项式（待定系数）

**$f(x) = e^{\alpha x}[P_l(x)\cos\beta x + P_n(x)\sin\beta x]$ 型**：

设特解 $y^* = x^k e^{\alpha x}[R_m(x)\cos\beta x + S_m(x)\sin\beta x]$，其中：

- $m = \max(l, n)$
- $k$ 为 $\alpha + i\beta$ 作为特征根的重数（$0$ 或 $1$）

---

## 第二部分：线性代数

### 七、行列式

#### 7.1 行列式的性质

1. $|A^T| = |A|$
2. 互换两行（列），行列式**变号**
3. 某行（列）有公因子可提到行列式外
4. 两行（列）成比例 $\Rightarrow$ 行列式为 $0$
5. 一行（列）的倍数加到另一行（列），行列式不变

#### 7.2 重要公式

设 $A, B$ 为 $n$ 阶方阵：

$$
\begin{aligned}
|A^T| &= |A| \\
|kA| &= k^n |A| \\
|AB| &= |A| \cdot |B| \\
|A^*| &= |A|^{n-1} \\
|A^{-1}| &= \frac{1}{|A|}
\end{aligned}
$$

#### 7.3 特殊行列式

**上/下三角行列式**：等于主对角线元素之积。

**范德蒙德行列式**：

$$
\begin{vmatrix}
1 & 1 & \cdots & 1 \\
x_1 & x_2 & \cdots & x_n \\
x_1^2 & x_2^2 & \cdots & x_n^2 \\
\vdots & \vdots & \ddots & \vdots \\
x_1^{n-1} & x_2^{n-1} & \cdots & x_n^{n-1}
\end{vmatrix}
= \prod_{1 \leq j < i \leq n} (x_i - x_j)
$$

**分块行列式**：

$$
\begin{vmatrix}
A & O \\ O & B
\end{vmatrix} = |A| \cdot |B|
$$

$$
\begin{vmatrix}
O & A \\ B & O
\end{vmatrix} = (-1)^{mn} |A| \cdot |B|
\quad (\text{$A$ 为 $m$ 阶，$B$ 为 $n$ 阶})
$$

---

### 八、矩阵

#### 8.1 矩阵运算

**乘法**：$(AB)_{ij} = \sum\limits_{k} a_{ik} b_{kj}$

> **注意**：$AB \neq BA$ 一般情况；$AB = 0$ 推不出 $A=0$ 或 $B=0$

**转置**：

$$
(AB)^T = B^T A^T
$$

#### 8.2 伴随矩阵

$A^*$ 是 $A$ 的伴随矩阵（代数余子式的转置）：

**核心公式**：

$$
A A^* = A^* A = |A| I
$$

由此推出：若 $A$ 可逆，则

$$
A^{-1} = \frac{1}{|A|} A^*
$$

**伴随矩阵的秩**：

$$
r(A^*) =
\begin{cases}
n, & r(A) = n \\
1, & r(A) = n - 1 \\
0, & r(A) < n - 1
\end{cases}
$$

#### 8.3 逆矩阵

**定义**：$AB = BA = I$，则 $B = A^{-1}$

**可逆的充要条件**：$|A| \neq 0$（即 $A$ 满秩 / 非奇异）

**求逆公式**：

$$
A^{-1} = \frac{1}{|A|} A^*
$$

**初等变换法**：$(A \mid I) \xrightarrow{\text{行变换}} (I \mid A^{-1})$

**运算性质**：

$$
\begin{aligned}
(A^{-1})^{-1} &= A \\
(kA)^{-1} &= \frac{1}{k} A^{-1} \\
(AB)^{-1} &= B^{-1} A^{-1} \\
(A^T)^{-1} &= (A^{-1})^T
\end{aligned}
$$

#### 8.4 矩阵的秩

**定义**：$A$ 中非零子式的最高阶数。

**性质**：

$$
\begin{aligned}
r(A) &= r(A^T) \\
r(kA) &= r(A) \quad (k \neq 0) \\
r(A+B) &\leq r(A) + r(B) \\
r(AB) &\leq \min\{r(A), r(B)\} \\
\max\{r(A), r(B)\} &\leq r(A \mid B) \leq r(A) + r(B)
\end{aligned}
$$

**满秩方阵**：$r(A) = n \iff |A| \neq 0 \iff A$ 可逆。

**秩为 1 的矩阵**：可分解为列向量 $\times$ 行向量：$A = \alpha \beta^T$

#### 8.5 矩阵方程

| 方程 | 解法（$A$ 可逆时） |
|------|---------------------|
| $AX = B$ | $X = A^{-1}B$ |
| $XA = B$ | $X = BA^{-1}$ |
| $AXB = C$ | $X = A^{-1}CB^{-1}$ |

---

### 九、向量

#### 9.1 线性组合与线性表示

向量 $\beta$ 可由向量组 $\alpha_1, \alpha_2, \ldots, \alpha_s$ **线性表示** $\iff$ 方程组 $x_1\alpha_1 + \cdots + x_s\alpha_s = \beta$ 有解。

#### 9.2 线性相关与线性无关

**定义**：若 $k_1\alpha_1 + \cdots + k_s\alpha_s = 0$ 只有**零解**，则向量组**线性无关**；若有非零解，则**线性相关**。

**重要结论**：

- $n$ 个 $n$ 维向量线性无关 $\iff$ 行列式 $\neq 0$
- $n+1$ 个 $n$ 维向量必然**线性相关**
- 含零向量的向量组**一定**线性相关
- 线性无关向量组的任何部分组也线性无关

#### 9.3 极大无关组与秩

- 向量组的**秩** = 极大无关组中向量的个数 = 向量组张成空间的维数
- 矩阵 $A$ 的秩 = $A$ 的行向量组的秩 = $A$ 的列向量组的秩
- 行秩 = 列秩 = 矩阵的秩

#### 9.4 向量空间

**基与维数**：

- 向量空间 $V$ 的一组基是 $V$ 中一组线性无关的向量，且 $V$ 中任一向量都可由它们线性表示
- $\dim V =$ 基中向量的个数

**基变换与坐标变换**：设 $\beta_1, \ldots, \beta_n$ 和 $\alpha_1, \ldots, \alpha_n$ 为两组基，且

$$
(\beta_1, \ldots, \beta_n) = (\alpha_1, \ldots, \alpha_n) P
$$

则 $P$ 为从基 $\{\alpha_i\}$ 到基 $\{\beta_i\}$ 的**过渡矩阵**。

若 $\alpha$ 在基 $\{\alpha_i\}$ 下坐标为 $x$，在基 $\{\beta_i\}$ 下坐标为 $y$，则：

$$
x = Py \quad \text{或} \quad y = P^{-1}x
$$

**施密特（Schmidt）正交化**：

从线性无关组 $\alpha_1, \ldots, \alpha_s$ 构造正交向量组 $\beta_1, \ldots, \beta_s$：

$$
\begin{aligned}
\beta_1 &= \alpha_1 \\
\beta_2 &= \alpha_2 - \frac{(\alpha_2, \beta_1)}{(\beta_1, \beta_1)} \beta_1 \\
\beta_3 &= \alpha_3 - \frac{(\alpha_3, \beta_1)}{(\beta_1, \beta_1)} \beta_1 - \frac{(\alpha_3, \beta_2)}{(\beta_2, \beta_2)} \beta_2 \\
&\vdots \\
\beta_s &= \alpha_s - \sum_{i=1}^{s-1} \frac{(\alpha_s, \beta_i)}{(\beta_i, \beta_i)} \beta_i
\end{aligned}
$$

再**单位化**：$e_i = \frac{\beta_i}{\|\beta_i\|}$，得到正交规范基。

---

### 十、线性方程组

#### 10.1 解的存在性（判定）

对于 $m \times n$ 方程组 $Ax = b$：

| 条件 | 结论 |
|------|------|
| $r(A) \neq r(A \mid b)$ | **无解** |
| $r(A) = r(A \mid b) = n$ | 有**唯一解** |
| $r(A) = r(A \mid b) < n$ | 有无穷多解，自由变量 $= n - r(A)$ 个 |

#### 10.2 齐次方程组 $Ax = 0$

- 必有**零解**
- 有非零解 $\iff r(A) < n$
- 特别地，$A$ 为 $n$ 阶方阵时，$Ax = 0$ 有非零解 $\iff |A| = 0$
- 基础解系：$n - r(A)$ 个线性无关的解向量

#### 10.3 非齐次方程组 $Ax = b$

通解：
$$
x = x_{\text{特解}} + x_{\text{齐次通解}}
$$

求解步骤：

1. 写出增广矩阵 $(A \mid b)$
2. 化为行最简形
3. 判断解的情况（无解 / 有解）
4. 求出齐次方程的通解 + 非齐次方程的一个特解

---

### 十一、特征值与特征向量

#### 11.1 定义

若 $A\alpha = \lambda \alpha$（$\alpha \neq 0$），则：

- $\lambda$ 为 $A$ 的**特征值**
- $\alpha$ 为 $A$ 对应于 $\lambda$ 的**特征向量**

#### 11.2 特征值的求法

特征方程：
$$
|\lambda I - A| = 0
$$

**特征值的性质**（设 $A$ 为 $n$ 阶方阵）：

$$
\begin{aligned}
\sum_{i=1}^n \lambda_i &= \operatorname{tr}(A) \quad (\text{迹：主对角线元素之和}) \\
\prod_{i=1}^n \lambda_i &= |A|
\end{aligned}
$$

**矩阵多项式与特征值**：若 $\lambda$ 是 $A$ 的特征值，则：

- $k\lambda$ 是 $kA$ 的特征值
- $\lambda^k$ 是 $A^k$ 的特征值
- $\frac{1}{\lambda}$ 是 $A^{-1}$ 的特征值（$A$ 可逆时）
- $f(\lambda)$ 是 $f(A)$ 的特征值

#### 11.3 特征向量的性质

- 不同特征值对应的特征向量**线性无关**
- $k$ 重特征值最多有 $k$ 个线性无关的特征向量
- 实对称矩阵不同特征值对应的特征向量**正交**

#### 11.4 相似对角化

$n$ 阶矩阵 $A$ 可与对角阵相似 $\iff$ $A$ 有 $n$ 个线性无关的特征向量。

即存在可逆矩阵 $P$，使得：

$$
P^{-1}AP = \Lambda = \operatorname{diag}(\lambda_1, \lambda_2, \ldots, \lambda_n)
$$

其中 $P$ 的列向量为 $A$ 的特征向量。

**$A$ 可对角化的充要条件**：$A$ 的每个 $k$ 重特征值恰好对应 $k$ 个线性无关的特征向量（即**几何重数 = 代数重数**）。

#### 11.5 实对称矩阵的对角化

对任意实对称矩阵 $A$：

- 特征值全为**实数**
- 存在**正交矩阵** $Q$（$Q^T = Q^{-1}$），使 $Q^T AQ = \Lambda$ 为对角阵
- 不同特征值对应的特征向量正交

正交对角化步骤：

1. 求 $A$ 的特征值
2. 对每个特征值求特征向量
3. 施密特正交化 + 单位化 → 得到正交规范基
4. 以它们为列构成 $Q$，则 $Q^T AQ = \operatorname{diag}(\lambda_1, \ldots, \lambda_n)$

---

### 十二、二次型

#### 12.1 二次型与矩阵

$n$ 元二次型：
$$
f(x_1, x_2, \ldots, x_n) = \sum_{i=1}^n \sum_{j=1}^n a_{ij} x_i x_j = x^T A x
$$

其中 $A$ 为**实对称矩阵**（$A^T = A$），称为二次型的矩阵。

#### 12.2 标准形与规范形

**标准形**（只有平方项）：

$$
f = d_1 y_1^2 + d_2 y_2^2 + \cdots + d_n y_n^2
$$

**规范形**（系数只取 $-1, 0, 1$）：

$$
f = z_1^2 + \cdots + z_p^2 - z_{p+1}^2 - \cdots - z_{p+q}^2
$$

其中 $p$ 为**正惯性指数**，$q$ 为**负惯性指数**，$p+q = r(A)$。

**惯性定理**：二次型经可逆线性变换化为标准形时，正、负惯性指数唯一。

#### 12.3 合同

若存在可逆矩阵 $C$，使 $B = C^T AC$，则称 $A$ 与 $B$ **合同**。

- 任何实对称矩阵必合同于对角阵
- 实对称矩阵 $A$ 与 $B$ 合同 $\iff$ 正、负惯性指数相同

#### 12.4 正定二次型

**定义**：若对任意 $x \neq 0$，都有 $f(x) = x^T A x > 0$，则称 $f$ 为**正定二次型**，$A$ 为**正定矩阵**。

**充要条件**：

1. $A$ 的特征值全大于 $0$
2. $A$ 的各阶**顺序主子式**全大于 $0$
3. $A$ 的正惯性指数 $p = n$
4. 存在可逆矩阵 $C$，使 $A = C^T C$

---

## 附录：常用三角函数公式

$$
\begin{aligned}
\sin^2 x + \cos^2 x &= 1 \\
1 + \tan^2 x &= \sec^2 x \\
1 + \cot^2 x &= \csc^2 x
\end{aligned}
$$

**和差公式**：

$$
\begin{aligned}
\sin(\alpha \pm \beta) &= \sin\alpha\cos\beta \pm \cos\alpha\sin\beta \\
\cos(\alpha \pm \beta) &= \cos\alpha\cos\beta \mp \sin\alpha\sin\beta \\
\tan(\alpha \pm \beta) &= \frac{\tan\alpha \pm \tan\beta}{1 \mp \tan\alpha\tan\beta}
\end{aligned}
$$

**倍角公式**：

$$
\begin{aligned}
\sin 2\alpha &= 2\sin\alpha\cos\alpha \\
\cos 2\alpha &= \cos^2\alpha - \sin^2\alpha = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha \\
\tan 2\alpha &= \frac{2\tan\alpha}{1 - \tan^2\alpha}
\end{aligned}
$$

**半角公式**：

$$
\begin{aligned}
\sin^2\frac{\alpha}{2} &= \frac{1 - \cos\alpha}{2} \\
\cos^2\frac{\alpha}{2} &= \frac{1 + \cos\alpha}{2}
\end{aligned}
$$

**积化和差**：

$$
\begin{aligned}
\sin\alpha\cos\beta &= \frac{1}{2}[\sin(\alpha+\beta) + \sin(\alpha-\beta)] \\
\cos\alpha\sin\beta &= \frac{1}{2}[\sin(\alpha+\beta) - \sin(\alpha-\beta)] \\
\cos\alpha\cos\beta &= \frac{1}{2}[\cos(\alpha+\beta) + \cos(\alpha-\beta)] \\
\sin\alpha\sin\beta &= -\frac{1}{2}[\cos(\alpha+\beta) - \cos(\alpha-\beta)]
\end{aligned}
$$

**和差化积**：

$$
\begin{aligned}
\sin\alpha + \sin\beta &= 2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2} \\
\sin\alpha - \sin\beta &= 2\cos\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2} \\
\cos\alpha + \cos\beta &= 2\cos\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2} \\
\cos\alpha - \cos\beta &= -2\sin\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}
\end{aligned}
$$

---

> **祝考研顺利，一战成硕！🎓**
