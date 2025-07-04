# 🛍️ Customer Segmentation using K-Means Clustering
> 🧑‍💼 Built during my internship at **Infotact Solutions**

![Internship Project](https://img.shields.io/badge/Internship-Infotact%20Solutions-blue)
![Language](https://img.shields.io/badge/Language-Python-yellow)
![Status](https://img.shields.io/badge/Project-Completed-brightgreen)

---

## 📖 Introduction

Customer segmentation is essential for businesses to understand customer behavior and target them effectively.  
This project uses **K-Means Clustering** to group mall customers based on:

- Age
- Gender
- Annual Income
- Spending Score

The goal is to help businesses:

- Identify valuable customer groups  
- Customize marketing efforts  
- Optimize resource allocation  
- Improve profitability

---

## 📁 Dataset Description

- **Source**: [Kaggle - Mall Customer Segmentation](https://www.kaggle.com/datasets/vjchoudhary7/customer-segmentation-tutorial)
- **Columns**:
  - `CustomerID`: Unique identifier
  - `Gender`: Male/Female
  - `Age`: Customer’s age
  - `Annual Income (k$)`: Annual income in thousands
  - `Spending Score`: Score assigned by mall (1–100)

---

## 🔧 Data Preprocessing

- ✔️ No missing values found
- ✔️ Encoded `Gender` using Label Encoding
- ✔️ Scaled numerical features using `StandardScaler`

---

## 📊 Exploratory Data Analysis (EDA)

- Plotted distributions for Age, Income, and Spending Score
- Analyzed gender balance
- Used correlation matrix to explore feature relationships

---

## 🔍 Optimal Number of Clusters

- **Elbow Method** and **Silhouette Score** used
- Optimal value of **K = 5** selected

---

## 🧠 K-Means Clustering

- Applied KMeans algorithm with `n_clusters=5`
- Added cluster labels to the dataset
- Grouped customers into 5 unique segments

---

## 📈 Visualization

- **2D Scatter Plot**: Annual Income vs Spending Score
- **PCA Projection**: Reduced dimensions for clear cluster visualization

---

## 🧬 Cluster Profiling

| Cluster | Description                                | Strategy Example                                   |
|---------|--------------------------------------------|----------------------------------------------------|
| 0       | High Income, High Spending                 | Premium products, loyalty clubs                    |
| 1       | Low Income, High Spending                  | Offers, cashback programs                          |
| 2       | High Income, Low Spending                  | Trust-building, value proposition marketing        |
| 3       | Low Income, Low Spending                   | Budget-friendly, essential products                |
| 4       | Young Adults, Avg Income/Spending          | Trend-driven, social media promotions              |

---

## 📢 Marketing Recommendations

- 🎯 Cluster-based targeting via email & ads
- 📱 Mobile-first UX for younger groups
- 🎁 Loyalty rewards for high spenders
- 🔁 Retarget low-engagement high-potential users

---

## 🚀 Future Improvements

- Real-time segmentation with user behavior data
- Try DBSCAN, GMM, and hierarchical clustering
- Dashboard using **Power BI** or **Tableau**
- A/B test marketing strategies

---

## 👨‍💻 Author

**Sankalp Gupta**  
Final Year B.Tech AI/ML Student, CSJMU (2022–2026)  
📧 csjma22001390321csemockai@csjmu.ac.in  
💼 Intern at Infotact Solutions

---

⭐ *If you found this project helpful, consider giving it a ⭐ on GitHub!*
