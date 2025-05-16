resource "aws_lambda_function" "lambafunction" {
  function_name = "my_lambda_function"
  package_type  = "Image"
  image_uri     = "${aws_ecr_repository.lambda_repo.repository_url}:latest"
  handler       = "index.handler"
  runtime       = "nodejs18.x"
  role          = aws_iam_role.lambda_exec.arn

  memory_size = 1024 # Memory size in MB
  timeout     = 60   # Timeout in seconds

  environment {
    variables = {
      ENV = "dev"
    }
  }

  tags = {
    Terraform   = "true"
    Environment = "dev"
  }
}

