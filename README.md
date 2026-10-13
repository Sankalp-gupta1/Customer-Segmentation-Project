# Customer Segmentation Dashboard

An interactive machine-learning project that groups mall customers into useful customer segments using **K-Means clustering**.

The original project was built in Python during my internship work. I later added a browser-based dashboard so anyone can open the project, change the number of clusters, and understand the result without running a notebook.

## What this project does

The dataset contains **200 mall customers**.

For every customer, the project uses:

- Gender
- Age
- Annual Income
- Spending Score

The dashboard then:

1. Loads the original CSV dataset.
2. Standardizes the input features.
3. Runs K-Means clustering.
4. Assigns every customer to a cluster.
5. Shows the clusters on an interactive Income vs Spending Score chart.
6. Calculates the average age, income and spending score of every cluster.
7. Gives each cluster an easy-to-understand descriptive label.

The labels are only summaries of the data. They are not predictions about real people.

## Live dashboard

The production deployment is hosted on Vercel.

If you are viewing this README while the first deployment is still building, wait for the repository's latest Vercel deployment to finish and then open the project from the repository deployment link.

## Dashboard features

- Change the number of clusters from **2 to 8**
- Run K-Means directly in the browser
- Interactive customer scatter plot
- Hover over a customer to see the customer's values
- Automatic segment profiles
- Cluster summary table
- Responsive layout for desktop and mobile
- No API key required
- No database required
- No backend server required for the live dashboard

## How the clustering works

### Step 1: Read the data

The dashboard reads:

`Mall_Customers.csv`

The original dataset has 200 rows.

### Step 2: Prepare the features

Gender is encoded as a numeric value for this educational model.

The numeric features are standardized so one feature does not dominate only because its numbers are larger.

### Step 3: Run K-Means

K-Means starts with cluster centers called **centroids**.

The algorithm repeatedly:

1. finds the closest centroid for every customer,
2. assigns the customer to that cluster,
3. recalculates the centroid,
4. repeats until the assignments stop changing or the iteration limit is reached.

### Step 4: Build cluster profiles

After clustering, the dashboard calculates:

- number of customers,
- average age,
- average annual income,
- average spending score.

It then creates simple descriptive names such as:

- Premium Loyalists
- High-Potential Observers
- Value Enthusiasts
- Budget-Conscious
- Young Trend Seekers
- Mainstream Core

These names help explain the output. They are not ground-truth customer categories.

## Project structure

```text
Customer-Segmentation-Project/
│
├── Mall_Customers.csv
├── PCA.ipynb
├── CUSTOMER SEG.pdf
├── Customer-Segmentation-using-K-Means-Clustering.pptx
├── images/
│
├── web/
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── Mall_Customers.csv
│
├── .github/
│   └── workflows/
│       └── pages.yml
│
└── README.md
```

## Run the dashboard locally

No Python setup is needed for the web dashboard.

### Option 1 — Python local server

From the repository root:

```bash
cd web
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

### Option 2 — VS Code Live Server

1. Open the repository in VS Code.
2. Open `web/index.html`.
3. Start Live Server.
4. The dashboard will open in the browser.

Do not open `index.html` only with a `file://` URL because browsers may block loading the CSV file. Use a small local server instead.

## Original Python analysis

The original notebook is still available:

```text
PCA.ipynb
```

It contains the Python-based analysis and clustering work.

The web dashboard does not delete or replace that work. It provides an easier interactive way to demonstrate the same project idea.

## Dataset

Source: public Mall Customer Segmentation dataset commonly used for K-Means learning projects.

Main columns:

| Column | Meaning |
|---|---|
| CustomerID | Unique customer number |
| Gender | Customer gender in the sample dataset |
| Age | Age in years |
| Annual Income (k$) | Annual income in thousands |
| Spending Score (1-100) | Dataset spending score |

## Technology used

### Original analysis

- Python
- Pandas / NumPy
- Scikit-learn
- K-Means
- PCA
- Jupyter Notebook

### Interactive dashboard

- HTML
- CSS
- Vanilla JavaScript
- SVG
- Browser-side K-Means
- Vercel

## Important limitations

This is an educational portfolio project.

- The dataset is small.
- It is not live customer data.
- The cluster names are descriptive labels.
- The project does not claim that these segments will improve real marketing results.
- A real production segmentation system would normally use larger behavioral data, validation, monitoring and controlled experiments.

## Why I built it

The main goal was to understand how unsupervised learning can turn raw customer attributes into groups that are easier to analyze.

The interactive dashboard was added so the result is not limited to a notebook screenshot. A reviewer can change the number of clusters and inspect the model behavior directly.

## Author

**Sankalp Gupta**

- GitHub: https://github.com/Sankalp-gupta1
- LinkedIn: https://www.linkedin.com/in/sankalp-gupta-rishi-8617302b0/
