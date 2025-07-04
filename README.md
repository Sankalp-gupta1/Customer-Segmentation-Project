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

- Used **Elbow Method** and **Silhouette Score**  
- Selected optimal number of clusters: **K = 5**

---

## 🧠 K-Means Clustering

- Applied KMeans algorithm with `n_clusters=5`  
- Assigned cluster labels to each customer  
- Added the `Cluster` column to the dataset

---

## 📈 Visualization

- **2D Scatter Plot**: Annual Income vs Spending Score  
- **PCA Projection**: Reduced dimensionality for visualizing clusters clearly

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

- Real-time segmentation using behavioral data  
- Add features like browsing history, frequency  
- Try DBSCAN, GMM, and hierarchical clustering  
- Visualize with dashboards using **Power BI** or **Tableau**  
- Validate campaigns via A/B testing

---

## 👨‍💻 Author

**Sankalp Gupta**  
- 🎓 Final Year B.Tech AI/ML Student, CSJMU (2022–2026)  
- 👨‍💼 Intern at Infotact Solutions (Performance-based internship)  
- 🧑 Age: 20  
- 🚹 Gender: Male  
- 💰 Stipend: ₹5000 (based on performance)  
- 📧 Email: csjma22001390321csemockai@csjmu.ac.in

---

⭐ *If you found this project helpful, feel free to star it and share it on GitHub!*
