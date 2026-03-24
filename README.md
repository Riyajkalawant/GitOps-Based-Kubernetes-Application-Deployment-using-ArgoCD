#  GitOps-Based Kubernetes Application Deployment using ArgoCD (EKS)

---

##  Project Overview
This project demonstrates a **GitOps workflow** using ArgoCD on AWS EKS where all deployments are managed through Git.

-  No manual `kubectl apply`
-  Fully automated deployment using ArgoCD

---

##  Architecture


Developer → GitHub → ArgoCD → EKS Cluster → Kubernetes


---

##  Tech Stack
- Docker
- Kubernetes (EKS)
- ArgoCD
- GitHub
- AWS EC2

---

##  Infrastructure Setup

###  EC2 Instance
![EC2](img/ec2-instance.png)

###  EKS Cluster
![EKS](img/eks.png)

---

##  Docker Image

### DockerHub Repository
![DockerHub](img/dockerhub.png)

---

##  GitHub Repository
![GitHub](img/github.png)

---

##  ArgoCD Setup

### ArgoCD Dashboard
![ArgoCD](img/argocd-dashboard.png)

### Auto Sync Enabled
![Auto Sync](img/auto-sync.png)

### Sync Details
![Sync Details](img/sync-details.png)

---

##  Kubernetes Resources

### Pods Running
![Pods](img/pods.png)

### Service (LoadBalancer)
![Service](img/svc.png)

---

##  Application Output

### Initial Version (v1)
![Output](img/output.png)

---

##  GitOps Working Proof

### Code Change (GitHub Commit)
![GitHub Change](img/github.png)

### Updated Output (v2)
![Output Change](img/output-change.png)

---

##  GitOps Workflow
1. Developer updates code
2. Pushes changes to GitHub
3. ArgoCD detects changes automatically
4. Syncs application with Kubernetes
5. Updated version deployed without manual intervention

---

##  Commands Used

```bash
# Build Docker Image
docker build -t riyajkalawant/gitops-app:v1 .

# Push Image
docker push riyajkalawant/gitops-app:v1

# Check Pods
kubectl get pods

# Check Services
kubectl get svc
```
 #### Key Features
 GitOps-based deployment
 Automated sync using ArgoCD
 Self-healing enabled
 Scalable Kubernetes deployment
 No manual cluster changes
#### Learnings
Importance of Git as source of truth
ArgoCD automation and sync
Kubernetes YAML structure Debugging deployment issues
 #### Conclusion

Successfully implemented a production-style GitOps pipeline using ArgoCD and AWS EKS with automated deployments.
#### Author

Riyaj Kalawant